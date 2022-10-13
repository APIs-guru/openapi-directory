package shared

import (
	"time"
)

type UserStatusEnum string

const (
	UserStatusEnumNormal    UserStatusEnum = "Normal"
	UserStatusEnumFraudlent UserStatusEnum = "Fraudlent"
	UserStatusEnumLocked    UserStatusEnum = "Locked"
)

type UserTypeEnum string

const (
	UserTypeEnumAnonymous           UserTypeEnum = "Anonymous"
	UserTypeEnumCustomer            UserTypeEnum = "Customer"
	UserTypeEnumSystemAdministrator UserTypeEnum = "SystemAdministrator"
	UserTypeEnumCollaborator        UserTypeEnum = "Collaborator"
)

type UserYearsOfExperienceEnum string

const (
	UserYearsOfExperienceEnumOne         UserYearsOfExperienceEnum = "One"
	UserYearsOfExperienceEnumOneToThree  UserYearsOfExperienceEnum = "OneToThree"
	UserYearsOfExperienceEnumThreeToFive UserYearsOfExperienceEnum = "ThreeToFive"
	UserYearsOfExperienceEnumSixPlus     UserYearsOfExperienceEnum = "SixPlus"
)

type User struct {
	ActionNotificationsLastReadOn    *time.Time                 `json:"ActionNotificationsLastReadOn"`
	Email                            *string                    `json:"Email"`
	ExternalConnections              []ExternalConnection       `json:"ExternalConnections"`
	HasBeenOnboarded                 *bool                      `json:"HasBeenOnboarded"`
	ID                               *int32                     `json:"Id"`
	IsLocked                         *bool                      `json:"IsLocked"`
	IsVerified                       *bool                      `json:"IsVerified"`
	KnowledgeNotificationsLastReadOn *time.Time                 `json:"KnowledgeNotificationsLastReadOn"`
	LastSeenOn                       *time.Time                 `json:"LastSeenOn"`
	Name                             *string                    `json:"Name"`
	Password                         *string                    `json:"Password"`
	PasswordSalt                     *string                    `json:"PasswordSalt"`
	ReferralPath                     *string                    `json:"ReferralPath"`
	ReferredUsers                    *int32                     `json:"ReferredUsers"`
	ReferrerKey                      *string                    `json:"ReferrerKey"`
	Settings                         *UserSettings              `json:"Settings"`
	Status                           *UserStatusEnum            `json:"Status"`
	SubscriptionPlan                 *SubscriptionPlan          `json:"SubscriptionPlan"`
	Type                             *UserTypeEnum              `json:"Type"`
	Username                         *string                    `json:"Username"`
	VerifiedOn                       *time.Time                 `json:"VerifiedOn"`
	YearsOfExperience                *UserYearsOfExperienceEnum `json:"YearsOfExperience"`
}

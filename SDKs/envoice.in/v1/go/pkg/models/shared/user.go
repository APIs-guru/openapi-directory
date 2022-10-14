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
	ActionNotificationsLastReadOn    *time.Time                 `json:"ActionNotificationsLastReadOn,omitempty"`
	Email                            *string                    `json:"Email,omitempty"`
	ExternalConnections              []ExternalConnection       `json:"ExternalConnections,omitempty"`
	HasBeenOnboarded                 *bool                      `json:"HasBeenOnboarded,omitempty"`
	ID                               *int32                     `json:"Id,omitempty"`
	IsLocked                         *bool                      `json:"IsLocked,omitempty"`
	IsVerified                       *bool                      `json:"IsVerified,omitempty"`
	KnowledgeNotificationsLastReadOn *time.Time                 `json:"KnowledgeNotificationsLastReadOn,omitempty"`
	LastSeenOn                       *time.Time                 `json:"LastSeenOn,omitempty"`
	Name                             *string                    `json:"Name,omitempty"`
	Password                         *string                    `json:"Password,omitempty"`
	PasswordSalt                     *string                    `json:"PasswordSalt,omitempty"`
	ReferralPath                     *string                    `json:"ReferralPath,omitempty"`
	ReferredUsers                    *int32                     `json:"ReferredUsers,omitempty"`
	ReferrerKey                      *string                    `json:"ReferrerKey,omitempty"`
	Settings                         *UserSettings              `json:"Settings,omitempty"`
	Status                           *UserStatusEnum            `json:"Status,omitempty"`
	SubscriptionPlan                 *SubscriptionPlan          `json:"SubscriptionPlan,omitempty"`
	Type                             *UserTypeEnum              `json:"Type,omitempty"`
	Username                         *string                    `json:"Username,omitempty"`
	VerifiedOn                       *time.Time                 `json:"VerifiedOn,omitempty"`
	YearsOfExperience                *UserYearsOfExperienceEnum `json:"YearsOfExperience,omitempty"`
}

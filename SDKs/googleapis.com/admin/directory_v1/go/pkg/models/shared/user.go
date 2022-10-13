package shared

import (
	"time"
)

type User struct {
	Addresses                  *interface{}                      `json:"addresses"`
	AgreedToTerms              *bool                             `json:"agreedToTerms"`
	Aliases                    []string                          `json:"aliases"`
	Archived                   *bool                             `json:"archived"`
	ChangePasswordAtNextLogin  *bool                             `json:"changePasswordAtNextLogin"`
	CreationTime               *time.Time                        `json:"creationTime"`
	CustomSchemas              map[string]map[string]interface{} `json:"customSchemas"`
	CustomerID                 *string                           `json:"customerId"`
	DeletionTime               *time.Time                        `json:"deletionTime"`
	Emails                     *interface{}                      `json:"emails"`
	Etag                       *string                           `json:"etag"`
	ExternalIds                *interface{}                      `json:"externalIds"`
	Gender                     *interface{}                      `json:"gender"`
	HashFunction               *string                           `json:"hashFunction"`
	ID                         *string                           `json:"id"`
	Ims                        *interface{}                      `json:"ims"`
	IncludeInGlobalAddressList *bool                             `json:"includeInGlobalAddressList"`
	IPWhitelisted              *bool                             `json:"ipWhitelisted"`
	IsAdmin                    *bool                             `json:"isAdmin"`
	IsDelegatedAdmin           *bool                             `json:"isDelegatedAdmin"`
	IsEnforcedIn2Sv            *bool                             `json:"isEnforcedIn2Sv"`
	IsEnrolledIn2Sv            *bool                             `json:"isEnrolledIn2Sv"`
	IsMailboxSetup             *bool                             `json:"isMailboxSetup"`
	Keywords                   *interface{}                      `json:"keywords"`
	Kind                       *string                           `json:"kind"`
	Languages                  *interface{}                      `json:"languages"`
	LastLoginTime              *time.Time                        `json:"lastLoginTime"`
	Locations                  *interface{}                      `json:"locations"`
	Name                       *UserName                         `json:"name"`
	NonEditableAliases         []string                          `json:"nonEditableAliases"`
	Notes                      *interface{}                      `json:"notes"`
	OrgUnitPath                *string                           `json:"orgUnitPath"`
	Organizations              *interface{}                      `json:"organizations"`
	Password                   *string                           `json:"password"`
	Phones                     *interface{}                      `json:"phones"`
	PosixAccounts              *interface{}                      `json:"posixAccounts"`
	PrimaryEmail               *string                           `json:"primaryEmail"`
	RecoveryEmail              *string                           `json:"recoveryEmail"`
	RecoveryPhone              *string                           `json:"recoveryPhone"`
	Relations                  *interface{}                      `json:"relations"`
	SSHPublicKeys              *interface{}                      `json:"sshPublicKeys"`
	Suspended                  *bool                             `json:"suspended"`
	SuspensionReason           *string                           `json:"suspensionReason"`
	ThumbnailPhotoEtag         *string                           `json:"thumbnailPhotoEtag"`
	ThumbnailPhotoURL          *string                           `json:"thumbnailPhotoUrl"`
	Websites                   *interface{}                      `json:"websites"`
}

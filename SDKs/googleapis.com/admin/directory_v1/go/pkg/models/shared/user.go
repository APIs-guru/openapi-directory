package shared

import (
	"time"
)

type User struct {
	Addresses                  *interface{}                      `json:"addresses,omitempty"`
	AgreedToTerms              *bool                             `json:"agreedToTerms,omitempty"`
	Aliases                    []string                          `json:"aliases,omitempty"`
	Archived                   *bool                             `json:"archived,omitempty"`
	ChangePasswordAtNextLogin  *bool                             `json:"changePasswordAtNextLogin,omitempty"`
	CreationTime               *time.Time                        `json:"creationTime,omitempty"`
	CustomSchemas              map[string]map[string]interface{} `json:"customSchemas,omitempty"`
	CustomerID                 *string                           `json:"customerId,omitempty"`
	DeletionTime               *time.Time                        `json:"deletionTime,omitempty"`
	Emails                     *interface{}                      `json:"emails,omitempty"`
	Etag                       *string                           `json:"etag,omitempty"`
	ExternalIds                *interface{}                      `json:"externalIds,omitempty"`
	Gender                     *interface{}                      `json:"gender,omitempty"`
	HashFunction               *string                           `json:"hashFunction,omitempty"`
	ID                         *string                           `json:"id,omitempty"`
	Ims                        *interface{}                      `json:"ims,omitempty"`
	IncludeInGlobalAddressList *bool                             `json:"includeInGlobalAddressList,omitempty"`
	IPWhitelisted              *bool                             `json:"ipWhitelisted,omitempty"`
	IsAdmin                    *bool                             `json:"isAdmin,omitempty"`
	IsDelegatedAdmin           *bool                             `json:"isDelegatedAdmin,omitempty"`
	IsEnforcedIn2Sv            *bool                             `json:"isEnforcedIn2Sv,omitempty"`
	IsEnrolledIn2Sv            *bool                             `json:"isEnrolledIn2Sv,omitempty"`
	IsMailboxSetup             *bool                             `json:"isMailboxSetup,omitempty"`
	Keywords                   *interface{}                      `json:"keywords,omitempty"`
	Kind                       *string                           `json:"kind,omitempty"`
	Languages                  *interface{}                      `json:"languages,omitempty"`
	LastLoginTime              *time.Time                        `json:"lastLoginTime,omitempty"`
	Locations                  *interface{}                      `json:"locations,omitempty"`
	Name                       *UserName                         `json:"name,omitempty"`
	NonEditableAliases         []string                          `json:"nonEditableAliases,omitempty"`
	Notes                      *interface{}                      `json:"notes,omitempty"`
	OrgUnitPath                *string                           `json:"orgUnitPath,omitempty"`
	Organizations              *interface{}                      `json:"organizations,omitempty"`
	Password                   *string                           `json:"password,omitempty"`
	Phones                     *interface{}                      `json:"phones,omitempty"`
	PosixAccounts              *interface{}                      `json:"posixAccounts,omitempty"`
	PrimaryEmail               *string                           `json:"primaryEmail,omitempty"`
	RecoveryEmail              *string                           `json:"recoveryEmail,omitempty"`
	RecoveryPhone              *string                           `json:"recoveryPhone,omitempty"`
	Relations                  *interface{}                      `json:"relations,omitempty"`
	SSHPublicKeys              *interface{}                      `json:"sshPublicKeys,omitempty"`
	Suspended                  *bool                             `json:"suspended,omitempty"`
	SuspensionReason           *string                           `json:"suspensionReason,omitempty"`
	ThumbnailPhotoEtag         *string                           `json:"thumbnailPhotoEtag,omitempty"`
	ThumbnailPhotoURL          *string                           `json:"thumbnailPhotoUrl,omitempty"`
	Websites                   *interface{}                      `json:"websites,omitempty"`
}

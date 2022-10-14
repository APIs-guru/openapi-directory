package shared

import (
	"time"
)

type ScimUserEmails struct {
	Primary *bool  `json:"primary,omitempty"`
	Value   string `json:"value"`
}

type ScimUserMeta struct {
	Created      *time.Time `json:"created,omitempty"`
	LastModified *time.Time `json:"lastModified,omitempty"`
	Location     *string    `json:"location,omitempty"`
	ResourceType *string    `json:"resourceType,omitempty"`
}

type ScimUserName struct {
	FamilyName string  `json:"familyName"`
	Formatted  *string `json:"formatted,omitempty"`
	GivenName  string  `json:"givenName"`
}

type ScimUserOperationsOpEnum string

const (
	ScimUserOperationsOpEnumAdd     ScimUserOperationsOpEnum = "add"
	ScimUserOperationsOpEnumRemove  ScimUserOperationsOpEnum = "remove"
	ScimUserOperationsOpEnumReplace ScimUserOperationsOpEnum = "replace"
)

type ScimUserOperations struct {
	Op    ScimUserOperationsOpEnum `json:"op"`
	Path  *string                  `json:"path,omitempty"`
	Value *interface{}             `json:"value,omitempty"`
}

type ScimUser struct {
	Active         bool                 `json:"active"`
	DisplayName    *string              `json:"displayName,omitempty"`
	Emails         []ScimUserEmails     `json:"emails"`
	ExternalID     string               `json:"externalId"`
	Groups         []interface{}        `json:"groups,omitempty"`
	ID             string               `json:"id"`
	Meta           ScimUserMeta         `json:"meta"`
	Name           ScimUserName         `json:"name"`
	Operations     []ScimUserOperations `json:"operations,omitempty"`
	OrganizationID *int64               `json:"organization_id,omitempty"`
	Schemas        []string             `json:"schemas"`
	UserName       string               `json:"userName"`
}

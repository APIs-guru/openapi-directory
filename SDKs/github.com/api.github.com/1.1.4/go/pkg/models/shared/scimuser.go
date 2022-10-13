package shared

import (
	"time"
)

type ScimUserEmails struct {
	Primary *bool  `json:"primary"`
	Value   string `json:"value"`
}

type ScimUserMeta struct {
	Created      *time.Time `json:"created"`
	LastModified *time.Time `json:"lastModified"`
	Location     *string    `json:"location"`
	ResourceType *string    `json:"resourceType"`
}

type ScimUserName struct {
	FamilyName string  `json:"familyName"`
	Formatted  *string `json:"formatted"`
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
	Path  *string                  `json:"path"`
	Value *interface{}             `json:"value"`
}

type ScimUser struct {
	Active         bool                 `json:"active"`
	DisplayName    *string              `json:"displayName"`
	Emails         []ScimUserEmails     `json:"emails"`
	ExternalID     string               `json:"externalId"`
	Groups         []interface{}        `json:"groups"`
	ID             string               `json:"id"`
	Meta           ScimUserMeta         `json:"meta"`
	Name           ScimUserName         `json:"name"`
	Operations     []ScimUserOperations `json:"operations"`
	OrganizationID *int64               `json:"organization_id"`
	Schemas        []string             `json:"schemas"`
	UserName       string               `json:"userName"`
}

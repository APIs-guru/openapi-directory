package operations

import (
	"openapi/pkg/models/shared"
)

type ScimProvisionAndInviteUserPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ScimProvisionAndInviteUserRequestBodyEmails struct {
	Primary *bool   `json:"primary"`
	Type    *string `json:"type"`
	Value   string  `json:"value"`
}

type ScimProvisionAndInviteUserRequestBodyName struct {
	FamilyName string  `json:"familyName"`
	Formatted  *string `json:"formatted"`
	GivenName  string  `json:"givenName"`
}

type ScimProvisionAndInviteUserRequestBody struct {
	Active      *bool                                         `json:"active"`
	DisplayName *string                                       `json:"displayName"`
	Emails      []ScimProvisionAndInviteUserRequestBodyEmails `json:"emails"`
	ExternalID  *string                                       `json:"externalId"`
	Groups      []string                                      `json:"groups"`
	Name        ScimProvisionAndInviteUserRequestBodyName     `json:"name"`
	Schemas     []string                                      `json:"schemas"`
	UserName    string                                        `json:"userName"`
}

type ScimProvisionAndInviteUserRequest struct {
	PathParams ScimProvisionAndInviteUserPathParams
	Request    *ScimProvisionAndInviteUserRequestBody `request:"mediaType=application/json"`
}

type ScimProvisionAndInviteUserResponse struct {
	ContentType string
	StatusCode  int64
	ScimError   *shared.ScimError
	ScimUser    *shared.ScimUser
}

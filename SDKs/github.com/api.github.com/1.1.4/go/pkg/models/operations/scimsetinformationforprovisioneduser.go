package operations

import (
	"openapi/pkg/models/shared"
)

type ScimSetInformationForProvisionedUserPathParams struct {
	Org        string `pathParam:"style=simple,explode=false,name=org"`
	ScimUserID string `pathParam:"style=simple,explode=false,name=scim_user_id"`
}

type ScimSetInformationForProvisionedUserRequestBodyEmails struct {
	Primary *bool   `json:"primary,omitempty"`
	Type    *string `json:"type,omitempty"`
	Value   string  `json:"value"`
}

type ScimSetInformationForProvisionedUserRequestBodyName struct {
	FamilyName string  `json:"familyName"`
	Formatted  *string `json:"formatted,omitempty"`
	GivenName  string  `json:"givenName"`
}

type ScimSetInformationForProvisionedUserRequestBody struct {
	Active      *bool                                                   `json:"active,omitempty"`
	DisplayName *string                                                 `json:"displayName,omitempty"`
	Emails      []ScimSetInformationForProvisionedUserRequestBodyEmails `json:"emails"`
	ExternalID  *string                                                 `json:"externalId,omitempty"`
	Groups      []string                                                `json:"groups,omitempty"`
	Name        ScimSetInformationForProvisionedUserRequestBodyName     `json:"name"`
	Schemas     []string                                                `json:"schemas,omitempty"`
	UserName    string                                                  `json:"userName"`
}

type ScimSetInformationForProvisionedUserRequest struct {
	PathParams ScimSetInformationForProvisionedUserPathParams
	Request    *ScimSetInformationForProvisionedUserRequestBody `request:"mediaType=application/json"`
}

type ScimSetInformationForProvisionedUserResponse struct {
	ContentType string
	StatusCode  int64
	ScimError   *shared.ScimError
	ScimUser    *shared.ScimUser
}

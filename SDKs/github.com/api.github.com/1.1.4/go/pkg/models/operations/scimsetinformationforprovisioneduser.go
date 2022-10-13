package operations

import (
	"openapi/pkg/models/shared"
)

type ScimSetInformationForProvisionedUserPathParams struct {
	Org        string `pathParam:"style=simple,explode=false,name=org"`
	ScimUserID string `pathParam:"style=simple,explode=false,name=scim_user_id"`
}

type ScimSetInformationForProvisionedUserRequestBodyEmails struct {
	Primary *bool   `json:"primary"`
	Type    *string `json:"type"`
	Value   string  `json:"value"`
}

type ScimSetInformationForProvisionedUserRequestBodyName struct {
	FamilyName string  `json:"familyName"`
	Formatted  *string `json:"formatted"`
	GivenName  string  `json:"givenName"`
}

type ScimSetInformationForProvisionedUserRequestBody struct {
	Active      *bool                                                   `json:"active"`
	DisplayName *string                                                 `json:"displayName"`
	Emails      []ScimSetInformationForProvisionedUserRequestBodyEmails `json:"emails"`
	ExternalID  *string                                                 `json:"externalId"`
	Groups      []string                                                `json:"groups"`
	Name        ScimSetInformationForProvisionedUserRequestBodyName     `json:"name"`
	Schemas     []string                                                `json:"schemas"`
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

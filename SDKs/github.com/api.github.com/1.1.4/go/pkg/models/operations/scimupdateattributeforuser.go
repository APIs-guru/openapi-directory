package operations

import (
	"openapi/pkg/models/shared"
)

type ScimUpdateAttributeForUserPathParams struct {
	Org        string `pathParam:"style=simple,explode=false,name=org"`
	ScimUserID string `pathParam:"style=simple,explode=false,name=scim_user_id"`
}

type ScimUpdateAttributeForUserRequestBodyOperationsOpEnum string

const (
	ScimUpdateAttributeForUserRequestBodyOperationsOpEnumAdd     ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = "add"
	ScimUpdateAttributeForUserRequestBodyOperationsOpEnumRemove  ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = "remove"
	ScimUpdateAttributeForUserRequestBodyOperationsOpEnumReplace ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = "replace"
)

type ScimUpdateAttributeForUserRequestBodyOperationsValue1 struct {
	Active     *bool   `json:"active"`
	ExternalID *string `json:"externalId"`
	FamilyName *string `json:"familyName"`
	GivenName  *string `json:"givenName"`
	UserName   *string `json:"userName"`
}

type ScimUpdateAttributeForUserRequestBodyOperationsValue2 struct {
	Primary *bool   `json:"primary"`
	Value   *string `json:"value"`
}

type ScimUpdateAttributeForUserRequestBodyOperations struct {
	Op    ScimUpdateAttributeForUserRequestBodyOperationsOpEnum `json:"op"`
	Path  *string                                               `json:"path"`
	Value *interface{}                                          `json:"value"`
}

type ScimUpdateAttributeForUserRequestBody struct {
	Operations []ScimUpdateAttributeForUserRequestBodyOperations `json:"Operations"`
	Schemas    []string                                          `json:"schemas"`
}

type ScimUpdateAttributeForUserRequest struct {
	PathParams ScimUpdateAttributeForUserPathParams
	Request    *ScimUpdateAttributeForUserRequestBody `request:"mediaType=application/json"`
}

type ScimUpdateAttributeForUserResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	ScimError   *shared.ScimError
	ScimUser    *shared.ScimUser
}

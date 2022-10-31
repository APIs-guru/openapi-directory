package operations

import (
"openapi/pkg/models/shared")

type ScimUpdateAttributeForUserPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    ScimUserID string `pathParam:"style=simple,explode=false,name=scim_user_id"`
    
}


type ScimUpdateAttributeForUserRequestBodyOperationsOpEnum string

const (
    ScimUpdateAttributeForUserRequestBodyOperationsOpEnumAdd ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = "add"
ScimUpdateAttributeForUserRequestBodyOperationsOpEnumRemove ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = "remove"
ScimUpdateAttributeForUserRequestBodyOperationsOpEnumReplace ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = "replace"
)


type ScimUpdateAttributeForUserRequestBodyOperationsValue1 struct {
    Active *bool `json:"active,omitempty"`
    ExternalID *string `json:"externalId,omitempty"`
    FamilyName *string `json:"familyName,omitempty"`
    GivenName *string `json:"givenName,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

type ScimUpdateAttributeForUserRequestBodyOperationsValue2 struct {
    Primary *bool `json:"primary,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type ScimUpdateAttributeForUserRequestBodyOperations struct {
    Op ScimUpdateAttributeForUserRequestBodyOperationsOpEnum `json:"op"`
    Path *string `json:"path,omitempty"`
    Value *interface{} `json:"value,omitempty"`
    
}

type ScimUpdateAttributeForUserRequestBody struct {
    Operations []ScimUpdateAttributeForUserRequestBodyOperations `json:"Operations"`
    Schemas []string `json:"schemas,omitempty"`
    
}

type ScimUpdateAttributeForUserRequest struct {
    PathParams ScimUpdateAttributeForUserPathParams 
    Request *ScimUpdateAttributeForUserRequestBody `request:"mediaType=application/json"`
    
}

type ScimUpdateAttributeForUserResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ScimError *shared.ScimError 
    ScimUser *shared.ScimUser 
    
}


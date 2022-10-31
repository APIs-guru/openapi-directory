package operations

import (
"openapi/pkg/models/shared")


type UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum string

const (
    UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnumPublic UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum = "public"
UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnumPrivate UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum = "private"
)


type UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody struct {
    Email string `json:"email"`
    Visibility UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum `json:"visibility"`
    
}

type UsersSetPrimaryEmailVisibilityForAuthenticatedRequest struct {
    Request *UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody `request:"mediaType=application/json"`
    
}

type UsersSetPrimaryEmailVisibilityForAuthenticatedResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Emails []shared.Email 
    ValidationError *shared.ValidationError 
    
}


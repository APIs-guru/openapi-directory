package operations

import (
"openapi/pkg/models/shared")


type ReposListPublicVisibilityEnum string

const (
    ReposListPublicVisibilityEnumAll ReposListPublicVisibilityEnum = "all"
ReposListPublicVisibilityEnumPublic ReposListPublicVisibilityEnum = "public"
)


type ReposListPublicQueryParams struct {
    Since *int64 `queryParam:"style=form,explode=true,name=since"`
    Visibility *ReposListPublicVisibilityEnum `queryParam:"style=form,explode=true,name=visibility"`
    
}

type ReposListPublicRequest struct {
    QueryParams ReposListPublicQueryParams 
    
}

type ReposListPublicResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    MinimalRepositories []shared.MinimalRepository 
    ValidationError *shared.ValidationError 
    
}


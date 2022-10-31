package operations

import (
"openapi/pkg/models/shared")

type ListFiltersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListFiltersXAmzTargetEnum string

const (
    ListFiltersXAmzTargetEnumAmazonPersonalizeListFilters ListFiltersXAmzTargetEnum = "AmazonPersonalize.ListFilters"
)


type ListFiltersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListFiltersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListFiltersRequest struct {
    QueryParams ListFiltersQueryParams 
    Headers ListFiltersHeaders 
    Request shared.ListFiltersRequest `request:"mediaType=application/json"`
    
}

type ListFiltersResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    InvalidNextTokenException *interface{} 
    ListFiltersResponse *shared.ListFiltersResponse 
    StatusCode int64 
    
}


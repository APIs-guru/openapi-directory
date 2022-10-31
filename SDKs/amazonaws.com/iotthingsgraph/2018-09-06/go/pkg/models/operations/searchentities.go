package operations

import (
"openapi/pkg/models/shared")

type SearchEntitiesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type SearchEntitiesXAmzTargetEnum string

const (
    SearchEntitiesXAmzTargetEnumIotThingsGraphFrontEndServiceSearchEntities SearchEntitiesXAmzTargetEnum = "IotThingsGraphFrontEndService.SearchEntities"
)


type SearchEntitiesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SearchEntitiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SearchEntitiesRequest struct {
    QueryParams SearchEntitiesQueryParams 
    Headers SearchEntitiesHeaders 
    Request shared.SearchEntitiesRequest `request:"mediaType=application/json"`
    
}

type SearchEntitiesResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    SearchEntitiesResponse *shared.SearchEntitiesResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}


package operations

import (
"openapi/pkg/models/shared")

type SearchFlowExecutionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type SearchFlowExecutionsXAmzTargetEnum string

const (
    SearchFlowExecutionsXAmzTargetEnumIotThingsGraphFrontEndServiceSearchFlowExecutions SearchFlowExecutionsXAmzTargetEnum = "IotThingsGraphFrontEndService.SearchFlowExecutions"
)


type SearchFlowExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SearchFlowExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SearchFlowExecutionsRequest struct {
    QueryParams SearchFlowExecutionsQueryParams 
    Headers SearchFlowExecutionsHeaders 
    Request shared.SearchFlowExecutionsRequest `request:"mediaType=application/json"`
    
}

type SearchFlowExecutionsResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    SearchFlowExecutionsResponse *shared.SearchFlowExecutionsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}


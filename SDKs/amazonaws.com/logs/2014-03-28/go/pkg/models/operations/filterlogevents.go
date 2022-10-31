package operations

import (
"openapi/pkg/models/shared")

type FilterLogEventsQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type FilterLogEventsXAmzTargetEnum string

const (
    FilterLogEventsXAmzTargetEnumLogs20140328FilterLogEvents FilterLogEventsXAmzTargetEnum = "Logs_20140328.FilterLogEvents"
)


type FilterLogEventsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget FilterLogEventsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type FilterLogEventsRequest struct {
    QueryParams FilterLogEventsQueryParams 
    Headers FilterLogEventsHeaders 
    Request shared.FilterLogEventsRequest `request:"mediaType=application/json"`
    
}

type FilterLogEventsResponse struct {
    ContentType string 
    FilterLogEventsResponse *shared.FilterLogEventsResponse 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}


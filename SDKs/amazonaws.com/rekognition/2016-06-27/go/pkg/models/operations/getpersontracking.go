package operations

import (
"openapi/pkg/models/shared")

type GetPersonTrackingQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetPersonTrackingXAmzTargetEnum string

const (
    GetPersonTrackingXAmzTargetEnumRekognitionServiceGetPersonTracking GetPersonTrackingXAmzTargetEnum = "RekognitionService.GetPersonTracking"
)


type GetPersonTrackingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetPersonTrackingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetPersonTrackingRequest struct {
    QueryParams GetPersonTrackingQueryParams 
    Headers GetPersonTrackingHeaders 
    Request shared.GetPersonTrackingRequest `request:"mediaType=application/json"`
    
}

type GetPersonTrackingResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetPersonTrackingResponse *shared.GetPersonTrackingResponse 
    InternalServerError *interface{} 
    InvalidPaginationTokenException *interface{} 
    InvalidParameterException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}


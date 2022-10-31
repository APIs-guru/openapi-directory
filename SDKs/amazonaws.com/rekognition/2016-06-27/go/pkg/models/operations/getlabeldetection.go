package operations

import (
"openapi/pkg/models/shared")

type GetLabelDetectionQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetLabelDetectionXAmzTargetEnum string

const (
    GetLabelDetectionXAmzTargetEnumRekognitionServiceGetLabelDetection GetLabelDetectionXAmzTargetEnum = "RekognitionService.GetLabelDetection"
)


type GetLabelDetectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetLabelDetectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetLabelDetectionRequest struct {
    QueryParams GetLabelDetectionQueryParams 
    Headers GetLabelDetectionHeaders 
    Request shared.GetLabelDetectionRequest `request:"mediaType=application/json"`
    
}

type GetLabelDetectionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetLabelDetectionResponse *shared.GetLabelDetectionResponse 
    InternalServerError *interface{} 
    InvalidPaginationTokenException *interface{} 
    InvalidParameterException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}


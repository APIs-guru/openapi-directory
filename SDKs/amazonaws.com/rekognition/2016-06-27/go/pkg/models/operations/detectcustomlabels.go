package operations

import (
"openapi/pkg/models/shared")


type DetectCustomLabelsXAmzTargetEnum string

const (
    DetectCustomLabelsXAmzTargetEnumRekognitionServiceDetectCustomLabels DetectCustomLabelsXAmzTargetEnum = "RekognitionService.DetectCustomLabels"
)


type DetectCustomLabelsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DetectCustomLabelsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DetectCustomLabelsRequest struct {
    Headers DetectCustomLabelsHeaders 
    Request shared.DetectCustomLabelsRequest `request:"mediaType=application/json"`
    
}

type DetectCustomLabelsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DetectCustomLabelsResponse *shared.DetectCustomLabelsResponse 
    ImageTooLargeException *interface{} 
    InternalServerError *interface{} 
    InvalidImageFormatException *interface{} 
    InvalidParameterException *interface{} 
    InvalidS3ObjectException *interface{} 
    LimitExceededException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    ResourceNotReadyException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}


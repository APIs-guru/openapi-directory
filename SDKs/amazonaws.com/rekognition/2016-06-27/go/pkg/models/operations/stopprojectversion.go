package operations

import (
"openapi/pkg/models/shared")


type StopProjectVersionXAmzTargetEnum string

const (
    StopProjectVersionXAmzTargetEnumRekognitionServiceStopProjectVersion StopProjectVersionXAmzTargetEnum = "RekognitionService.StopProjectVersion"
)


type StopProjectVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopProjectVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopProjectVersionRequest struct {
    Headers StopProjectVersionHeaders 
    Request shared.StopProjectVersionRequest `request:"mediaType=application/json"`
    
}

type StopProjectVersionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    InvalidParameterException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    StopProjectVersionResponse *shared.StopProjectVersionResponse 
    ThrottlingException *interface{} 
    
}


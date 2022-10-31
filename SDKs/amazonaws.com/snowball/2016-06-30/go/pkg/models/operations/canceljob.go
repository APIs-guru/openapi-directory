package operations

import (
"openapi/pkg/models/shared")


type CancelJobXAmzTargetEnum string

const (
    CancelJobXAmzTargetEnumAwsieSnowballJobManagementServiceCancelJob CancelJobXAmzTargetEnum = "AWSIESnowballJobManagementService.CancelJob"
)


type CancelJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CancelJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CancelJobRequest struct {
    Headers CancelJobHeaders 
    Request shared.CancelJobRequest `request:"mediaType=application/json"`
    
}

type CancelJobResponse struct {
    CancelJobResult map[string]interface{} 
    ContentType string 
    InvalidJobStateException *interface{} 
    InvalidResourceException *interface{} 
    KmsRequestFailedException *interface{} 
    StatusCode int64 
    
}


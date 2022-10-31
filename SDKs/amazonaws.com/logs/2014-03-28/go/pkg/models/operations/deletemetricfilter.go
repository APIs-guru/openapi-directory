package operations

import (
"openapi/pkg/models/shared")


type DeleteMetricFilterXAmzTargetEnum string

const (
    DeleteMetricFilterXAmzTargetEnumLogs20140328DeleteMetricFilter DeleteMetricFilterXAmzTargetEnum = "Logs_20140328.DeleteMetricFilter"
)


type DeleteMetricFilterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteMetricFilterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteMetricFilterRequest struct {
    Headers DeleteMetricFilterHeaders 
    Request shared.DeleteMetricFilterRequest `request:"mediaType=application/json"`
    
}

type DeleteMetricFilterResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    OperationAbortedException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}


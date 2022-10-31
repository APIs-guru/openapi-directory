package operations

import (
"openapi/pkg/models/shared")


type StopQueryXAmzTargetEnum string

const (
    StopQueryXAmzTargetEnumLogs20140328StopQuery StopQueryXAmzTargetEnum = "Logs_20140328.StopQuery"
)


type StopQueryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopQueryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopQueryRequest struct {
    Headers StopQueryHeaders 
    Request shared.StopQueryRequest `request:"mediaType=application/json"`
    
}

type StopQueryResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    StopQueryResponse *shared.StopQueryResponse 
    
}


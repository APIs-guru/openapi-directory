package operations

import (
"openapi/pkg/models/shared")


type TestMetricFilterXAmzTargetEnum string

const (
    TestMetricFilterXAmzTargetEnumLogs20140328TestMetricFilter TestMetricFilterXAmzTargetEnum = "Logs_20140328.TestMetricFilter"
)


type TestMetricFilterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget TestMetricFilterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type TestMetricFilterRequest struct {
    Headers TestMetricFilterHeaders 
    Request shared.TestMetricFilterRequest `request:"mediaType=application/json"`
    
}

type TestMetricFilterResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TestMetricFilterResponse *shared.TestMetricFilterResponse 
    
}


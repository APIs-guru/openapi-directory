package operations

import (
"openapi/pkg/models/shared")


type DeleteCallAnalyticsJobXAmzTargetEnum string

const (
    DeleteCallAnalyticsJobXAmzTargetEnumTranscribeDeleteCallAnalyticsJob DeleteCallAnalyticsJobXAmzTargetEnum = "Transcribe.DeleteCallAnalyticsJob"
)


type DeleteCallAnalyticsJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteCallAnalyticsJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteCallAnalyticsJobRequest struct {
    Headers DeleteCallAnalyticsJobHeaders 
    Request shared.DeleteCallAnalyticsJobRequest `request:"mediaType=application/json"`
    
}

type DeleteCallAnalyticsJobResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteCallAnalyticsJobResponse map[string]interface{} 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}


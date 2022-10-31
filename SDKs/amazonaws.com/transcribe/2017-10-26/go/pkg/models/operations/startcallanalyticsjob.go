package operations

import (
"openapi/pkg/models/shared")


type StartCallAnalyticsJobXAmzTargetEnum string

const (
    StartCallAnalyticsJobXAmzTargetEnumTranscribeStartCallAnalyticsJob StartCallAnalyticsJobXAmzTargetEnum = "Transcribe.StartCallAnalyticsJob"
)


type StartCallAnalyticsJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartCallAnalyticsJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartCallAnalyticsJobRequest struct {
    Headers StartCallAnalyticsJobHeaders 
    Request shared.StartCallAnalyticsJobRequest `request:"mediaType=application/json"`
    
}

type StartCallAnalyticsJobResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    StartCallAnalyticsJobResponse *shared.StartCallAnalyticsJobResponse 
    StatusCode int64 
    
}


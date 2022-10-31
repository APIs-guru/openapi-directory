package operations

import (
"openapi/pkg/models/shared")


type DescribeTrustedAdvisorCheckResultXAmzTargetEnum string

const (
    DescribeTrustedAdvisorCheckResultXAmzTargetEnumAwsSupport20130415DescribeTrustedAdvisorCheckResult DescribeTrustedAdvisorCheckResultXAmzTargetEnum = "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult"
)


type DescribeTrustedAdvisorCheckResultHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeTrustedAdvisorCheckResultXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeTrustedAdvisorCheckResultRequest struct {
    Headers DescribeTrustedAdvisorCheckResultHeaders 
    Request shared.DescribeTrustedAdvisorCheckResultRequest `request:"mediaType=application/json"`
    
}

type DescribeTrustedAdvisorCheckResultResponse struct {
    ContentType string 
    DescribeTrustedAdvisorCheckResultResponse *shared.DescribeTrustedAdvisorCheckResultResponse 
    InternalServerError *interface{} 
    StatusCode int64 
    
}


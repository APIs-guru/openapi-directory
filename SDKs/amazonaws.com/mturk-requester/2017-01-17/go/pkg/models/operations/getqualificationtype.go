package operations

import (
"openapi/pkg/models/shared")


type GetQualificationTypeXAmzTargetEnum string

const (
    GetQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117GetQualificationType GetQualificationTypeXAmzTargetEnum = "MTurkRequesterServiceV20170117.GetQualificationType"
)


type GetQualificationTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetQualificationTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetQualificationTypeRequest struct {
    Headers GetQualificationTypeHeaders 
    Request shared.GetQualificationTypeRequest `request:"mediaType=application/json"`
    
}

type GetQualificationTypeResponse struct {
    ContentType string 
    GetQualificationTypeResponse *shared.GetQualificationTypeResponse 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}


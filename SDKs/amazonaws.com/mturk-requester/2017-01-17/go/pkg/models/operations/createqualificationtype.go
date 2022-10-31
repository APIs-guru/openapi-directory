package operations

import (
"openapi/pkg/models/shared")


type CreateQualificationTypeXAmzTargetEnum string

const (
    CreateQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117CreateQualificationType CreateQualificationTypeXAmzTargetEnum = "MTurkRequesterServiceV20170117.CreateQualificationType"
)


type CreateQualificationTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateQualificationTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateQualificationTypeRequest struct {
    Headers CreateQualificationTypeHeaders 
    Request shared.CreateQualificationTypeRequest `request:"mediaType=application/json"`
    
}

type CreateQualificationTypeResponse struct {
    ContentType string 
    CreateQualificationTypeResponse *shared.CreateQualificationTypeResponse 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}


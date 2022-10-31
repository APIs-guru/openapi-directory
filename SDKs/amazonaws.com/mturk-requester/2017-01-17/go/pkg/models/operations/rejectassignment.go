package operations

import (
"openapi/pkg/models/shared")


type RejectAssignmentXAmzTargetEnum string

const (
    RejectAssignmentXAmzTargetEnumMTurkRequesterServiceV20170117RejectAssignment RejectAssignmentXAmzTargetEnum = "MTurkRequesterServiceV20170117.RejectAssignment"
)


type RejectAssignmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RejectAssignmentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RejectAssignmentRequest struct {
    Headers RejectAssignmentHeaders 
    Request shared.RejectAssignmentRequest `request:"mediaType=application/json"`
    
}

type RejectAssignmentResponse struct {
    ContentType string 
    RejectAssignmentResponse map[string]interface{} 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}


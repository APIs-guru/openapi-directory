package operations

import (
"openapi/pkg/models/shared")


type AssociateQualificationWithWorkerXAmzTargetEnum string

const (
    AssociateQualificationWithWorkerXAmzTargetEnumMTurkRequesterServiceV20170117AssociateQualificationWithWorker AssociateQualificationWithWorkerXAmzTargetEnum = "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker"
)


type AssociateQualificationWithWorkerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateQualificationWithWorkerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateQualificationWithWorkerRequest struct {
    Headers AssociateQualificationWithWorkerHeaders 
    Request shared.AssociateQualificationWithWorkerRequest `request:"mediaType=application/json"`
    
}

type AssociateQualificationWithWorkerResponse struct {
    AssociateQualificationWithWorkerResponse map[string]interface{} 
    ContentType string 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")


type GetQualificationScoreXAmzTargetEnum string

const (
    GetQualificationScoreXAmzTargetEnumMTurkRequesterServiceV20170117GetQualificationScore GetQualificationScoreXAmzTargetEnum = "MTurkRequesterServiceV20170117.GetQualificationScore"
)


type GetQualificationScoreHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetQualificationScoreXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetQualificationScoreRequest struct {
    Headers GetQualificationScoreHeaders 
    Request shared.GetQualificationScoreRequest `request:"mediaType=application/json"`
    
}

type GetQualificationScoreResponse struct {
    ContentType string 
    GetQualificationScoreResponse *shared.GetQualificationScoreResponse 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}


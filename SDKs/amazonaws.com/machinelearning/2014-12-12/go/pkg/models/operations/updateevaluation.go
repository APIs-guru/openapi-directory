package operations

import (
"openapi/pkg/models/shared")


type UpdateEvaluationXAmzTargetEnum string

const (
    UpdateEvaluationXAmzTargetEnumAmazonMl20141212UpdateEvaluation UpdateEvaluationXAmzTargetEnum = "AmazonML_20141212.UpdateEvaluation"
)


type UpdateEvaluationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateEvaluationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateEvaluationRequest struct {
    Headers UpdateEvaluationHeaders 
    Request shared.UpdateEvaluationInput `request:"mediaType=application/json"`
    
}

type UpdateEvaluationResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateEvaluationOutput *shared.UpdateEvaluationOutput 
    
}


package operations

import (
"openapi/pkg/models/shared")


type DeleteBatchPredictionXAmzTargetEnum string

const (
    DeleteBatchPredictionXAmzTargetEnumAmazonMl20141212DeleteBatchPrediction DeleteBatchPredictionXAmzTargetEnum = "AmazonML_20141212.DeleteBatchPrediction"
)


type DeleteBatchPredictionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteBatchPredictionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteBatchPredictionRequest struct {
    Headers DeleteBatchPredictionHeaders 
    Request shared.DeleteBatchPredictionInput `request:"mediaType=application/json"`
    
}

type DeleteBatchPredictionResponse struct {
    ContentType string 
    DeleteBatchPredictionOutput *shared.DeleteBatchPredictionOutput 
    InternalServerException *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


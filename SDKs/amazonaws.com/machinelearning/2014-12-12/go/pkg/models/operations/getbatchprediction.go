package operations

import (
"openapi/pkg/models/shared")


type GetBatchPredictionXAmzTargetEnum string

const (
    GetBatchPredictionXAmzTargetEnumAmazonMl20141212GetBatchPrediction GetBatchPredictionXAmzTargetEnum = "AmazonML_20141212.GetBatchPrediction"
)


type GetBatchPredictionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetBatchPredictionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetBatchPredictionRequest struct {
    Headers GetBatchPredictionHeaders 
    Request shared.GetBatchPredictionInput `request:"mediaType=application/json"`
    
}

type GetBatchPredictionResponse struct {
    ContentType string 
    GetBatchPredictionOutput *shared.GetBatchPredictionOutput 
    InternalServerException *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


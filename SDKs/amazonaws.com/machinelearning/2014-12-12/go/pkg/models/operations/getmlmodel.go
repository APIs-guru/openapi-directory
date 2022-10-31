package operations

import (
"openapi/pkg/models/shared")


type GetMlModelXAmzTargetEnum string

const (
    GetMlModelXAmzTargetEnumAmazonMl20141212GetMlModel GetMlModelXAmzTargetEnum = "AmazonML_20141212.GetMLModel"
)


type GetMlModelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetMlModelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetMlModelRequest struct {
    Headers GetMlModelHeaders 
    Request shared.GetMlModelInput `request:"mediaType=application/json"`
    
}

type GetMlModelResponse struct {
    ContentType string 
    GetMlModelOutput *shared.GetMlModelOutput 
    InternalServerException *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


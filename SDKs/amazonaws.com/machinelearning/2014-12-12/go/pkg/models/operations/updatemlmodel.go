package operations

import (
"openapi/pkg/models/shared")


type UpdateMlModelXAmzTargetEnum string

const (
    UpdateMlModelXAmzTargetEnumAmazonMl20141212UpdateMlModel UpdateMlModelXAmzTargetEnum = "AmazonML_20141212.UpdateMLModel"
)


type UpdateMlModelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateMlModelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateMlModelRequest struct {
    Headers UpdateMlModelHeaders 
    Request shared.UpdateMlModelInput `request:"mediaType=application/json"`
    
}

type UpdateMlModelResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateMlModelOutput *shared.UpdateMlModelOutput 
    
}


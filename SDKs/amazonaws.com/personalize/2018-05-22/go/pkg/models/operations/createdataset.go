package operations

import (
"openapi/pkg/models/shared")


type CreateDatasetXAmzTargetEnum string

const (
    CreateDatasetXAmzTargetEnumAmazonPersonalizeCreateDataset CreateDatasetXAmzTargetEnum = "AmazonPersonalize.CreateDataset"
)


type CreateDatasetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateDatasetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateDatasetRequest struct {
    Headers CreateDatasetHeaders 
    Request shared.CreateDatasetRequest `request:"mediaType=application/json"`
    
}

type CreateDatasetResponse struct {
    ContentType string 
    CreateDatasetResponse *shared.CreateDatasetResponse 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")


type UpdateProvisionedProductXAmzTargetEnum string

const (
    UpdateProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceUpdateProvisionedProduct UpdateProvisionedProductXAmzTargetEnum = "AWS242ServiceCatalogService.UpdateProvisionedProduct"
)


type UpdateProvisionedProductHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateProvisionedProductXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateProvisionedProductRequest struct {
    Headers UpdateProvisionedProductHeaders 
    Request shared.UpdateProvisionedProductInput `request:"mediaType=application/json"`
    
}

type UpdateProvisionedProductResponse struct {
    ContentType string 
    InvalidParametersException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateProvisionedProductOutput *shared.UpdateProvisionedProductOutput 
    
}


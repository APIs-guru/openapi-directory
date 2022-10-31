package operations

import (
"openapi/pkg/models/shared")


type DeleteProductXAmzTargetEnum string

const (
    DeleteProductXAmzTargetEnumAws242ServiceCatalogServiceDeleteProduct DeleteProductXAmzTargetEnum = "AWS242ServiceCatalogService.DeleteProduct"
)


type DeleteProductHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteProductXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteProductRequest struct {
    Headers DeleteProductHeaders 
    Request shared.DeleteProductInput `request:"mediaType=application/json"`
    
}

type DeleteProductResponse struct {
    ContentType string 
    DeleteProductOutput map[string]interface{} 
    InvalidParametersException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TagOptionNotMigratedException *interface{} 
    
}


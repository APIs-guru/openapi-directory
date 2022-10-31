package operations

import (
"openapi/pkg/models/shared")


type ImportAsProvisionedProductXAmzTargetEnum string

const (
    ImportAsProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceImportAsProvisionedProduct ImportAsProvisionedProductXAmzTargetEnum = "AWS242ServiceCatalogService.ImportAsProvisionedProduct"
)


type ImportAsProvisionedProductHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ImportAsProvisionedProductXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ImportAsProvisionedProductRequest struct {
    Headers ImportAsProvisionedProductHeaders 
    Request shared.ImportAsProvisionedProductInput `request:"mediaType=application/json"`
    
}

type ImportAsProvisionedProductResponse struct {
    ContentType string 
    DuplicateResourceException *interface{} 
    ImportAsProvisionedProductOutput *shared.ImportAsProvisionedProductOutput 
    InvalidParametersException *interface{} 
    InvalidStateException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


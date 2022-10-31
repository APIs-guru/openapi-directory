package operations

import (
"openapi/pkg/models/shared")


type ScanProvisionedProductsXAmzTargetEnum string

const (
    ScanProvisionedProductsXAmzTargetEnumAws242ServiceCatalogServiceScanProvisionedProducts ScanProvisionedProductsXAmzTargetEnum = "AWS242ServiceCatalogService.ScanProvisionedProducts"
)


type ScanProvisionedProductsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ScanProvisionedProductsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ScanProvisionedProductsRequest struct {
    Headers ScanProvisionedProductsHeaders 
    Request shared.ScanProvisionedProductsInput `request:"mediaType=application/json"`
    
}

type ScanProvisionedProductsResponse struct {
    ContentType string 
    InvalidParametersException *interface{} 
    ScanProvisionedProductsOutput *shared.ScanProvisionedProductsOutput 
    StatusCode int64 
    
}


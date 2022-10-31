package operations

import (
"openapi/pkg/models/shared")


type ExecuteProvisionedProductServiceActionXAmzTargetEnum string

const (
    ExecuteProvisionedProductServiceActionXAmzTargetEnumAws242ServiceCatalogServiceExecuteProvisionedProductServiceAction ExecuteProvisionedProductServiceActionXAmzTargetEnum = "AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction"
)


type ExecuteProvisionedProductServiceActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ExecuteProvisionedProductServiceActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ExecuteProvisionedProductServiceActionRequest struct {
    Headers ExecuteProvisionedProductServiceActionHeaders 
    Request shared.ExecuteProvisionedProductServiceActionInput `request:"mediaType=application/json"`
    
}

type ExecuteProvisionedProductServiceActionResponse struct {
    ContentType string 
    ExecuteProvisionedProductServiceActionOutput *shared.ExecuteProvisionedProductServiceActionOutput 
    InvalidParametersException *interface{} 
    InvalidStateException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


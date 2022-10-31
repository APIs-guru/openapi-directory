package operations

import (
"openapi/pkg/models/shared")


type UpdatePortfolioShareXAmzTargetEnum string

const (
    UpdatePortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceUpdatePortfolioShare UpdatePortfolioShareXAmzTargetEnum = "AWS242ServiceCatalogService.UpdatePortfolioShare"
)


type UpdatePortfolioShareHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdatePortfolioShareXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdatePortfolioShareRequest struct {
    Headers UpdatePortfolioShareHeaders 
    Request shared.UpdatePortfolioShareInput `request:"mediaType=application/json"`
    
}

type UpdatePortfolioShareResponse struct {
    ContentType string 
    InvalidParametersException *interface{} 
    InvalidStateException *interface{} 
    OperationNotSupportedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdatePortfolioShareOutput *shared.UpdatePortfolioShareOutput 
    
}


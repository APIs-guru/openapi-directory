package operations

import (
"openapi/pkg/models/shared")


type RejectPortfolioShareXAmzTargetEnum string

const (
    RejectPortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceRejectPortfolioShare RejectPortfolioShareXAmzTargetEnum = "AWS242ServiceCatalogService.RejectPortfolioShare"
)


type RejectPortfolioShareHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RejectPortfolioShareXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RejectPortfolioShareRequest struct {
    Headers RejectPortfolioShareHeaders 
    Request shared.RejectPortfolioShareInput `request:"mediaType=application/json"`
    
}

type RejectPortfolioShareResponse struct {
    ContentType string 
    RejectPortfolioShareOutput map[string]interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


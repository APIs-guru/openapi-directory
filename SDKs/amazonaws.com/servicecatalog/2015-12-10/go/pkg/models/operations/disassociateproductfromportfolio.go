package operations

import (
"openapi/pkg/models/shared")


type DisassociateProductFromPortfolioXAmzTargetEnum string

const (
    DisassociateProductFromPortfolioXAmzTargetEnumAws242ServiceCatalogServiceDisassociateProductFromPortfolio DisassociateProductFromPortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.DisassociateProductFromPortfolio"
)


type DisassociateProductFromPortfolioHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateProductFromPortfolioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateProductFromPortfolioRequest struct {
    Headers DisassociateProductFromPortfolioHeaders 
    Request shared.DisassociateProductFromPortfolioInput `request:"mediaType=application/json"`
    
}

type DisassociateProductFromPortfolioResponse struct {
    ContentType string 
    DisassociateProductFromPortfolioOutput map[string]interface{} 
    InvalidParametersException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


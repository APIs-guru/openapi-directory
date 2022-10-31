package operations

import (
"openapi/pkg/models/shared")


type CreatePortfolioShareXAmzTargetEnum string

const (
    CreatePortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceCreatePortfolioShare CreatePortfolioShareXAmzTargetEnum = "AWS242ServiceCatalogService.CreatePortfolioShare"
)


type CreatePortfolioShareHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreatePortfolioShareXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreatePortfolioShareRequest struct {
    Headers CreatePortfolioShareHeaders 
    Request shared.CreatePortfolioShareInput `request:"mediaType=application/json"`
    
}

type CreatePortfolioShareResponse struct {
    ContentType string 
    CreatePortfolioShareOutput *shared.CreatePortfolioShareOutput 
    InvalidParametersException *interface{} 
    InvalidStateException *interface{} 
    LimitExceededException *interface{} 
    OperationNotSupportedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


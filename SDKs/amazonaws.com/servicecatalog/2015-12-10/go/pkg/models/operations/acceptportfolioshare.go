package operations

import (
"openapi/pkg/models/shared")


type AcceptPortfolioShareXAmzTargetEnum string

const (
    AcceptPortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceAcceptPortfolioShare AcceptPortfolioShareXAmzTargetEnum = "AWS242ServiceCatalogService.AcceptPortfolioShare"
)


type AcceptPortfolioShareHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AcceptPortfolioShareXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AcceptPortfolioShareRequest struct {
    Headers AcceptPortfolioShareHeaders 
    Request shared.AcceptPortfolioShareInput `request:"mediaType=application/json"`
    
}

type AcceptPortfolioShareResponse struct {
    AcceptPortfolioShareOutput map[string]interface{} 
    ContentType string 
    InvalidParametersException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


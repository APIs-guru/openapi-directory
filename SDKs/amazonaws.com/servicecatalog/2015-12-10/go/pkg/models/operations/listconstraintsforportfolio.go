package operations

import (
"openapi/pkg/models/shared")

type ListConstraintsForPortfolioQueryParams struct {
    PageSize *string `queryParam:"style=form,explode=true,name=PageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
    
}


type ListConstraintsForPortfolioXAmzTargetEnum string

const (
    ListConstraintsForPortfolioXAmzTargetEnumAws242ServiceCatalogServiceListConstraintsForPortfolio ListConstraintsForPortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.ListConstraintsForPortfolio"
)


type ListConstraintsForPortfolioHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListConstraintsForPortfolioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListConstraintsForPortfolioRequest struct {
    QueryParams ListConstraintsForPortfolioQueryParams 
    Headers ListConstraintsForPortfolioHeaders 
    Request shared.ListConstraintsForPortfolioInput `request:"mediaType=application/json"`
    
}

type ListConstraintsForPortfolioResponse struct {
    ContentType string 
    InvalidParametersException *interface{} 
    ListConstraintsForPortfolioOutput *shared.ListConstraintsForPortfolioOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}


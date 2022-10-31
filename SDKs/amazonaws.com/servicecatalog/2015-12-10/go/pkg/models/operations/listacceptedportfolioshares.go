package operations

import (
"openapi/pkg/models/shared")

type ListAcceptedPortfolioSharesQueryParams struct {
    PageSize *string `queryParam:"style=form,explode=true,name=PageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
    
}


type ListAcceptedPortfolioSharesXAmzTargetEnum string

const (
    ListAcceptedPortfolioSharesXAmzTargetEnumAws242ServiceCatalogServiceListAcceptedPortfolioShares ListAcceptedPortfolioSharesXAmzTargetEnum = "AWS242ServiceCatalogService.ListAcceptedPortfolioShares"
)


type ListAcceptedPortfolioSharesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAcceptedPortfolioSharesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAcceptedPortfolioSharesRequest struct {
    QueryParams ListAcceptedPortfolioSharesQueryParams 
    Headers ListAcceptedPortfolioSharesHeaders 
    Request shared.ListAcceptedPortfolioSharesInput `request:"mediaType=application/json"`
    
}

type ListAcceptedPortfolioSharesResponse struct {
    ContentType string 
    InvalidParametersException *interface{} 
    ListAcceptedPortfolioSharesOutput *shared.ListAcceptedPortfolioSharesOutput 
    OperationNotSupportedException *interface{} 
    StatusCode int64 
    
}


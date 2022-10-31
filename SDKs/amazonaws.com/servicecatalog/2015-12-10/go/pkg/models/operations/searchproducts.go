package operations

import (
"openapi/pkg/models/shared")

type SearchProductsQueryParams struct {
    PageSize *string `queryParam:"style=form,explode=true,name=PageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
    
}


type SearchProductsXAmzTargetEnum string

const (
    SearchProductsXAmzTargetEnumAws242ServiceCatalogServiceSearchProducts SearchProductsXAmzTargetEnum = "AWS242ServiceCatalogService.SearchProducts"
)


type SearchProductsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SearchProductsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SearchProductsRequest struct {
    QueryParams SearchProductsQueryParams 
    Headers SearchProductsHeaders 
    Request shared.SearchProductsInput `request:"mediaType=application/json"`
    
}

type SearchProductsResponse struct {
    ContentType string 
    InvalidParametersException *interface{} 
    SearchProductsOutput *shared.SearchProductsOutput 
    StatusCode int64 
    
}


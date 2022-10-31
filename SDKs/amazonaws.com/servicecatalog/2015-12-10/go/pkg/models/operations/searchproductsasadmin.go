package operations

import (
"openapi/pkg/models/shared")

type SearchProductsAsAdminQueryParams struct {
    PageSize *string `queryParam:"style=form,explode=true,name=PageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
    
}


type SearchProductsAsAdminXAmzTargetEnum string

const (
    SearchProductsAsAdminXAmzTargetEnumAws242ServiceCatalogServiceSearchProductsAsAdmin SearchProductsAsAdminXAmzTargetEnum = "AWS242ServiceCatalogService.SearchProductsAsAdmin"
)


type SearchProductsAsAdminHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SearchProductsAsAdminXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SearchProductsAsAdminRequest struct {
    QueryParams SearchProductsAsAdminQueryParams 
    Headers SearchProductsAsAdminHeaders 
    Request shared.SearchProductsAsAdminInput `request:"mediaType=application/json"`
    
}

type SearchProductsAsAdminResponse struct {
    ContentType string 
    InvalidParametersException *interface{} 
    ResourceNotFoundException *interface{} 
    SearchProductsAsAdminOutput *shared.SearchProductsAsAdminOutput 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type CreateProductPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type CreateProductRequests struct {
    CreateProductRequest *shared.CreateProductRequest `request:"mediaType=application/*+json"`
    CreateProductRequest1 *shared.CreateProductRequest `request:"mediaType=application/json"`
    CreateProductRequest2 *shared.CreateProductRequest `request:"mediaType=text/json"`
    
}

type CreateProductRequest struct {
    PathParams CreateProductPathParams 
    Request CreateProductRequests 
    
}

type CreateProductResponse struct {
    ContentType string 
    ProductModel *shared.ProductModel 
    ProductModelHaljson *shared.ProductModelHaljson 
    StatusCode int64 
    
}


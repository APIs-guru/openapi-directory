package operations

import (
"openapi/pkg/models/shared")

type SearchQueryParams struct {
    AspectFilter *string `queryParam:"style=form,explode=true,name=aspect_filter"`
    CategoryIds *string `queryParam:"style=form,explode=true,name=category_ids"`
    Fieldgroups *string `queryParam:"style=form,explode=true,name=fieldgroups"`
    Gtin *string `queryParam:"style=form,explode=true,name=gtin"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Mpn *string `queryParam:"style=form,explode=true,name=mpn"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    
}

type SearchSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type SearchRequest struct {
    QueryParams SearchQueryParams 
    Security SearchSecurity 
    
}

type SearchResponse struct {
    ContentType string 
    ProductSearchResponse *shared.ProductSearchResponse 
    StatusCode int64 
    
}


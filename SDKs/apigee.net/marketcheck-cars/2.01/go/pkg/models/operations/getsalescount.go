package operations

import (
"openapi/pkg/models/shared")


type GetSalesCountCarTypeEnum string

const (
    GetSalesCountCarTypeEnumNew GetSalesCountCarTypeEnum = "new"
GetSalesCountCarTypeEnumUsed GetSalesCountCarTypeEnum = "used"
)



type GetSalesCountCountryEnum string

const (
    GetSalesCountCountryEnumUsLower GetSalesCountCountryEnum = "us"
GetSalesCountCountryEnumCaLower GetSalesCountCountryEnum = "ca"
GetSalesCountCountryEnumUsUpper GetSalesCountCountryEnum = "US"
GetSalesCountCountryEnumCaUpper GetSalesCountCountryEnum = "CA"
)


type GetSalesCountQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    CarType *GetSalesCountCarTypeEnum `queryParam:"style=form,explode=true,name=car_type"`
    CityState *string `queryParam:"style=form,explode=true,name=city_state"`
    Country *GetSalesCountCountryEnum `queryParam:"style=form,explode=true,name=country"`
    Make *string `queryParam:"style=form,explode=true,name=make"`
    Mm *string `queryParam:"style=form,explode=true,name=mm"`
    State *string `queryParam:"style=form,explode=true,name=state"`
    TaxonomyVin *string `queryParam:"style=form,explode=true,name=taxonomy_vin"`
    Vin *string `queryParam:"style=form,explode=true,name=vin"`
    Ymm *string `queryParam:"style=form,explode=true,name=ymm"`
    Ymmt *string `queryParam:"style=form,explode=true,name=ymmt"`
    
}

type GetSalesCountRequest struct {
    QueryParams GetSalesCountQueryParams 
    
}

type GetSalesCountResponse struct {
    ContentType string 
    Error *shared.Error 
    Sales *shared.Sales 
    StatusCode int64 
    
}


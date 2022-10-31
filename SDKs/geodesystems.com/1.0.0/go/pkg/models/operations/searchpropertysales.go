package operations

import (
"time")

type SearchPropertySalesQueryParams struct {
    ChangedateFrom *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
    ChangedateTo *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
    CreatedateFrom *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
    CreatedateTo *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Filesuffix *string `queryParam:"style=form,explode=true,name=filesuffix"`
    Fromdate *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    Max *int64 `queryParam:"style=form,explode=true,name=max"`
    Maxlatitude *float32 `queryParam:"style=form,explode=true,name=maxlatitude"`
    Maxlongitude *float32 `queryParam:"style=form,explode=true,name=maxlongitude"`
    Minlatitude *float32 `queryParam:"style=form,explode=true,name=minlatitude"`
    Minlongitude *float32 `queryParam:"style=form,explode=true,name=minlongitude"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    SearchDbPropertySalesBuildingDescription *string `queryParam:"style=form,explode=true,name=search.db_property_sales.building_description"`
    SearchDbPropertySalesBuildingDesign *string `queryParam:"style=form,explode=true,name=search.db_property_sales.building_design"`
    SearchDbPropertySalesBuyer *string `queryParam:"style=form,explode=true,name=search.db_property_sales.buyer"`
    SearchDbPropertySalesCity *string `queryParam:"style=form,explode=true,name=search.db_property_sales.city"`
    SearchDbPropertySalesLocation *string `queryParam:"style=form,explode=true,name=search.db_property_sales.location"`
    SearchDbPropertySalesPropertyAddress *string `queryParam:"style=form,explode=true,name=search.db_property_sales.property_address"`
    SearchDbPropertySalesSaleDate *string `queryParam:"style=form,explode=true,name=search.db_property_sales.sale_date"`
    SearchDbPropertySalesSalePrice *float64 `queryParam:"style=form,explode=true,name=search.db_property_sales.sale_price"`
    SearchDbPropertySalesSeller *string `queryParam:"style=form,explode=true,name=search.db_property_sales.seller"`
    SearchDbPropertySalesSubdivision *string `queryParam:"style=form,explode=true,name=search.db_property_sales.subdivision"`
    SearchDbPropertySalesType *string `queryParam:"style=form,explode=true,name=search.db_property_sales.type"`
    SearchDbPropertySalesZipcode *string `queryParam:"style=form,explode=true,name=search.db_property_sales.zipcode"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchPropertySalesRequest struct {
    QueryParams SearchPropertySalesQueryParams 
    
}

type SearchPropertySalesResponse struct {
    ContentType string 
    StatusCode int64 
    
}


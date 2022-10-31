package operations

import (
"openapi/pkg/models/shared")

type GetSearchMotorcycleActiveQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    BodyType *string `queryParam:"style=form,explode=true,name=body_type"`
    City *string `queryParam:"style=form,explode=true,name=city"`
    Color *string `queryParam:"style=form,explode=true,name=color"`
    Cylinders *string `queryParam:"style=form,explode=true,name=cylinders"`
    DealerID *string `queryParam:"style=form,explode=true,name=dealer_id"`
    Drivetrain *string `queryParam:"style=form,explode=true,name=drivetrain"`
    Engine *string `queryParam:"style=form,explode=true,name=engine"`
    FacetSort *shared.FacetSortEnum `queryParam:"style=form,explode=true,name=facet_sort"`
    Facets *string `queryParam:"style=form,explode=true,name=facets"`
    FirstSeenDays *string `queryParam:"style=form,explode=true,name=first_seen_days"`
    FirstSeenRange *string `queryParam:"style=form,explode=true,name=first_seen_range"`
    FuelType *string `queryParam:"style=form,explode=true,name=fuel_type"`
    InventoryType *shared.InventoryTypeEnum `queryParam:"style=form,explode=true,name=inventory_type"`
    LastSeenDays *string `queryParam:"style=form,explode=true,name=last_seen_days"`
    LastSeenRange *string `queryParam:"style=form,explode=true,name=last_seen_range"`
    Latitude *float64 `queryParam:"style=form,explode=true,name=latitude"`
    Longitude *float64 `queryParam:"style=form,explode=true,name=longitude"`
    Make *string `queryParam:"style=form,explode=true,name=make"`
    MilesRange *string `queryParam:"style=form,explode=true,name=miles_range"`
    Model *string `queryParam:"style=form,explode=true,name=model"`
    MsaCode *string `queryParam:"style=form,explode=true,name=msa_code"`
    MsrpRange *string `queryParam:"style=form,explode=true,name=msrp_range"`
    PriceRange *string `queryParam:"style=form,explode=true,name=price_range"`
    Radius *int32 `queryParam:"style=form,explode=true,name=radius"`
    RangeFacets *string `queryParam:"style=form,explode=true,name=range_facets"`
    Rows *int32 `queryParam:"style=form,explode=true,name=rows"`
    SearchText *string `queryParam:"style=form,explode=true,name=search_text"`
    SortBy *string `queryParam:"style=form,explode=true,name=sort_by"`
    SortOrder *shared.SortOrderEnum `queryParam:"style=form,explode=true,name=sort_order"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    Start *int32 `queryParam:"style=form,explode=true,name=start"`
    State *string `queryParam:"style=form,explode=true,name=state"`
    Stats *string `queryParam:"style=form,explode=true,name=stats"`
    StockNo *string `queryParam:"style=form,explode=true,name=stock_no"`
    TaxonomyVin *string `queryParam:"style=form,explode=true,name=taxonomy_vin"`
    Transmission *string `queryParam:"style=form,explode=true,name=transmission"`
    Trim *string `queryParam:"style=form,explode=true,name=trim"`
    VehicleType *string `queryParam:"style=form,explode=true,name=vehicle_type"`
    Vin *string `queryParam:"style=form,explode=true,name=vin"`
    Year *string `queryParam:"style=form,explode=true,name=year"`
    Zip *string `queryParam:"style=form,explode=true,name=zip"`
    
}

type GetSearchMotorcycleActiveRequest struct {
    QueryParams GetSearchMotorcycleActiveQueryParams 
    
}

type GetSearchMotorcycleActiveResponse struct {
    ContentType string 
    Error *shared.Error 
    MotorcycleSearchResponse *shared.MotorcycleSearchResponse 
    StatusCode int64 
    
}


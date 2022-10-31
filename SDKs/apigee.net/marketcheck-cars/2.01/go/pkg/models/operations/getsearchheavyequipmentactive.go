package operations

import (
"openapi/pkg/models/shared")

type GetSearchHeavyEquipmentActiveQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    BodyType *string `queryParam:"style=form,explode=true,name=body_type"`
    Category *string `queryParam:"style=form,explode=true,name=category"`
    City *string `queryParam:"style=form,explode=true,name=city"`
    DealerID *string `queryParam:"style=form,explode=true,name=dealer_id"`
    DealerName *string `queryParam:"style=form,explode=true,name=dealer_name"`
    Drivetrain *string `queryParam:"style=form,explode=true,name=drivetrain"`
    Engine *string `queryParam:"style=form,explode=true,name=engine"`
    ExteriorColor *string `queryParam:"style=form,explode=true,name=exterior_color"`
    FacetSort *shared.FacetSortEnum `queryParam:"style=form,explode=true,name=facet_sort"`
    Facets *string `queryParam:"style=form,explode=true,name=facets"`
    FirstSeenDays *string `queryParam:"style=form,explode=true,name=first_seen_days"`
    FirstSeenRange *string `queryParam:"style=form,explode=true,name=first_seen_range"`
    FuelType *string `queryParam:"style=form,explode=true,name=fuel_type"`
    HoursUsedRange *string `queryParam:"style=form,explode=true,name=hours_used_range"`
    InteriorColor *string `queryParam:"style=form,explode=true,name=interior_color"`
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
    SubCategory *string `queryParam:"style=form,explode=true,name=sub_category"`
    Transmission *string `queryParam:"style=form,explode=true,name=transmission"`
    Trim *string `queryParam:"style=form,explode=true,name=trim"`
    Vin *string `queryParam:"style=form,explode=true,name=vin"`
    Year *string `queryParam:"style=form,explode=true,name=year"`
    Zip *string `queryParam:"style=form,explode=true,name=zip"`
    
}

type GetSearchHeavyEquipmentActiveRequest struct {
    QueryParams GetSearchHeavyEquipmentActiveQueryParams 
    
}

type GetSearchHeavyEquipmentActiveResponse struct {
    ContentType string 
    Error *shared.Error 
    HeavyEquipmentsSearchResponse *shared.HeavyEquipmentsSearchResponse 
    StatusCode int64 
    
}


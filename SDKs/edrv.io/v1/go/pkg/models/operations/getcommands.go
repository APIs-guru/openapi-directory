package operations

import (
"time"
"openapi/pkg/models/shared")

type GetCommandsQueryParams struct {
    CreatedAtDollarGte *time.Time `queryParam:"style=form,explode=true,name=createdAt[$gte]"`
    CreatedAtDollarLte *time.Time `queryParam:"style=form,explode=true,name=createdAt[$lte]"`
    IncludeChargestation *bool `queryParam:"style=form,explode=true,name=include_chargestation"`
    IncludeDriver *bool `queryParam:"style=form,explode=true,name=include_driver"`
    IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
    IncludeTransaction *bool `queryParam:"style=form,explode=true,name=include_transaction"`
    PaginateEnabled *bool `queryParam:"style=form,explode=true,name=paginate_enabled"`
    PaginateLimit *int64 `queryParam:"style=form,explode=true,name=paginate_limit"`
    PaginatePage *string `queryParam:"style=form,explode=true,name=paginate_page"`
    SortBy *string `queryParam:"style=form,explode=true,name=sort_by"`
    SortOrder *shared.SortOrder1Enum `queryParam:"style=form,explode=true,name=sort_order"`
    UpdatedAtDollarGte *time.Time `queryParam:"style=form,explode=true,name=updatedAt[$gte]"`
    UpdatedAtDollarLte *time.Time `queryParam:"style=form,explode=true,name=updatedAt[$lte]"`
    
}

type GetCommandsRequest struct {
    QueryParams GetCommandsQueryParams 
    
}

type GetCommandsResponse struct {
    ContentType string 
    StatusCode int64 
    
}


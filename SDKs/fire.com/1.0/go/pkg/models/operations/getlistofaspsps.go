package operations

import (
"time"
"openapi/pkg/models/shared")

type GetListOfAspspsQueryParams struct {
    Currency *string `queryParam:"style=form,explode=true,name=currency"`
    
}

type GetListOfAspspsRequest struct {
    QueryParams GetListOfAspspsQueryParams 
    
}

type GetListOfAspspsAspspsAspspCountry struct {
    Code *string `json:"code,omitempty"`
    Description *string `json:"description,omitempty"`
    
}

type GetListOfAspspsAspspsAspsp struct {
    Alias *string `json:"alias,omitempty"`
    AspspUUID *string `json:"aspspUuid,omitempty"`
    Country *GetListOfAspspsAspspsAspspCountry `json:"country,omitempty"`
    Currency *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency,omitempty"`
    DateCreated *time.Time `json:"dateCreated,omitempty"`
    LastUpdated *time.Time `json:"lastUpdated,omitempty"`
    LogoURL *string `json:"logoUrl,omitempty"`
    
}

type GetListOfAspspsAspsps struct {
    Aspsps []GetListOfAspspsAspspsAspsp `json:"aspsps,omitempty"`
    Total *int64 `json:"total,omitempty"`
    
}

type GetListOfAspspsResponse struct {
    Aspsps *GetListOfAspspsAspsps 
    ContentType string 
    StatusCode int64 
    
}


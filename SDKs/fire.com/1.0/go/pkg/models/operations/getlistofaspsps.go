package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetListOfAspspsQueryParams struct {
	Currency *string `queryParam:"style=form,explode=true,name=currency"`
}

type GetListOfAspspsRequest struct {
	QueryParams GetListOfAspspsQueryParams
}

type GetListOfAspsps200ApplicationJSONAspspsCountryCountry struct {
	Code        *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
}

type GetListOfAspsps200ApplicationJSONAspspsAspsp struct {
	Alias       *string                                                                                                  `json:"alias,omitempty"`
	AspspUUID   *string                                                                                                  `json:"aspspUuid,omitempty"`
	Country     *GetListOfAspsps200ApplicationJSONAspspsCountryCountry                                                   `json:"country,omitempty"`
	Currency    *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency,omitempty"`
	DateCreated *time.Time                                                                                               `json:"dateCreated,omitempty"`
	LastUpdated *time.Time                                                                                               `json:"lastUpdated,omitempty"`
	LogoURL     *string                                                                                                  `json:"logoUrl,omitempty"`
}

type GetListOfAspsps200ApplicationJSONAspsps struct {
	Aspsps []GetListOfAspsps200ApplicationJSONAspspsAspsp `json:"aspsps,omitempty"`
	Total  *int64                                         `json:"total,omitempty"`
}

type GetListOfAspspsResponse struct {
	Aspsps      *GetListOfAspsps200ApplicationJSONAspsps
	ContentType string
	StatusCode  int64
}

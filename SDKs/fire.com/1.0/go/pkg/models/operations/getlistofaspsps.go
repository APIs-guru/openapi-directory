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
	Code        *string `json:"code"`
	Description *string `json:"description"`
}

type GetListOfAspsps200ApplicationJSONAspspsAspsp struct {
	Alias       *string                                                                                                  `json:"alias"`
	AspspUUID   *string                                                                                                  `json:"aspspUuid"`
	Country     *GetListOfAspsps200ApplicationJSONAspspsCountryCountry                                                   `json:"country"`
	Currency    *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency"`
	DateCreated *time.Time                                                                                               `json:"dateCreated"`
	LastUpdated *time.Time                                                                                               `json:"lastUpdated"`
	LogoURL     *string                                                                                                  `json:"logoUrl"`
}

type GetListOfAspsps200ApplicationJSONAspsps struct {
	Aspsps []GetListOfAspsps200ApplicationJSONAspspsAspsp `json:"aspsps"`
	Total  *int64                                         `json:"total"`
}

type GetListOfAspspsResponse struct {
	Aspsps      *GetListOfAspsps200ApplicationJSONAspsps
	ContentType string
	StatusCode  int64
}

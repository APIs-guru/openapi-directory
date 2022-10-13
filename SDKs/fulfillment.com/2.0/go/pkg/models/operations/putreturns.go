package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PutReturnsRequestBodyItems struct {
	QuantityExpected int64  `json:"quantityExpected"`
	Sku              string `json:"sku"`
}

type PutReturnsRequestBodyRmaRequestV2 struct {
	Items           []PutReturnsRequestBodyItems                                                    `json:"items"`
	MerchantOrderID *string                                                                         `json:"merchantOrderId"`
	Recipient       shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient `json:"recipient"`
	RmaNumber       string                                                                          `json:"rmaNumber"`
}

type PutReturnsSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type PutReturnsRequest struct {
	Request  PutReturnsRequestBodyRmaRequestV2 `request:"mediaType=application/json"`
	Security PutReturnsSecurity
}

type PutReturns201ApplicationJSONItems struct {
	QuantityExpected int64  `json:"quantityExpected"`
	Sku              string `json:"sku"`
}

type PutReturns201ApplicationJSONRecipientIsoIsoCountryV2 struct {
	ID   *int64  `json:"id"`
	Iso2 *string `json:"iso2"`
	Name *string `json:"name"`
}

type PutReturns201ApplicationJSONRecipientConsigneeV2 struct {
	Address1        string                                                                                               `json:"address1"`
	Address2        *string                                                                                              `json:"address2"`
	AddressLocality string                                                                                               `json:"addressLocality"`
	AddressRegion   string                                                                                               `json:"addressRegion"`
	CompanyName     *string                                                                                              `json:"companyName"`
	Country         string                                                                                               `json:"country"`
	Email           *string                                                                                              `json:"email"`
	FirstName       string                                                                                               `json:"firstName"`
	ID              int64                                                                                                `json:"id"`
	Iso             *PutReturns201ApplicationJSONRecipientIsoIsoCountryV2                                                `json:"iso"`
	LastName        string                                                                                               `json:"lastName"`
	Phone           *string                                                                                              `json:"phone"`
	PostalCode      string                                                                                               `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                           `json:"updatedAt"`
	UpdatedBy       *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy"`
}

type PutReturns201ApplicationJSONRmaResponseV2 struct {
	Items           []PutReturns201ApplicationJSONItems              `json:"items"`
	MerchantOrderID *string                                          `json:"merchantOrderId"`
	Recipient       PutReturns201ApplicationJSONRecipientConsigneeV2 `json:"recipient"`
	RmaNumber       string                                           `json:"rmaNumber"`
}

type PutReturnsResponse struct {
	ContentType                                            string
	RmaResponseV2                                          *PutReturns201ApplicationJSONRmaResponseV2
	StatusCode                                             int64
	OneordersGetResponses404ContentApplication1jsonSchema  *shared.OneordersGetResponses404ContentApplication1jsonSchema
	OnereturnsPutResponses201ContentApplication1jsonSchema *shared.OnereturnsPutResponses201ContentApplication1jsonSchema
}

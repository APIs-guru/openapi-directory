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
	MerchantOrderID *string                                                                         `json:"merchantOrderId,omitempty"`
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
	ID   *int64  `json:"id,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Name *string `json:"name,omitempty"`
}

type PutReturns201ApplicationJSONRecipientConsigneeV2 struct {
	Address1        string                                                                                               `json:"address1"`
	Address2        *string                                                                                              `json:"address2,omitempty"`
	AddressLocality string                                                                                               `json:"addressLocality"`
	AddressRegion   string                                                                                               `json:"addressRegion"`
	CompanyName     *string                                                                                              `json:"companyName,omitempty"`
	Country         string                                                                                               `json:"country"`
	Email           *string                                                                                              `json:"email,omitempty"`
	FirstName       string                                                                                               `json:"firstName"`
	ID              int64                                                                                                `json:"id"`
	Iso             *PutReturns201ApplicationJSONRecipientIsoIsoCountryV2                                                `json:"iso,omitempty"`
	LastName        string                                                                                               `json:"lastName"`
	Phone           *string                                                                                              `json:"phone,omitempty"`
	PostalCode      string                                                                                               `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                           `json:"updatedAt,omitempty"`
	UpdatedBy       *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy,omitempty"`
}

type PutReturns201ApplicationJSONRmaResponseV2 struct {
	Items           []PutReturns201ApplicationJSONItems              `json:"items"`
	MerchantOrderID *string                                          `json:"merchantOrderId,omitempty"`
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

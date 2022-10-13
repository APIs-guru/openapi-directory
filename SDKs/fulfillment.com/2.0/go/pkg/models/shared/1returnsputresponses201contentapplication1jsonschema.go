package shared

import (
	"time"
)

type OnereturnsPutResponses201ContentApplication1jsonSchemaItems struct {
	QuantityExpected int64  `json:"quantityExpected"`
	Sku              string `json:"sku"`
}

type OnereturnsPutResponses201ContentApplication1jsonSchemaRecipientIsoIsoCountryV2 struct {
	ID   *int64  `json:"id"`
	Iso2 *string `json:"iso2"`
	Name *string `json:"name"`
}

type OnereturnsPutResponses201ContentApplication1jsonSchemaRecipientConsigneeV2 struct {
	Address1        string                                                                                        `json:"address1"`
	Address2        *string                                                                                       `json:"address2"`
	AddressLocality string                                                                                        `json:"addressLocality"`
	AddressRegion   string                                                                                        `json:"addressRegion"`
	CompanyName     *string                                                                                       `json:"companyName"`
	Country         string                                                                                        `json:"country"`
	Email           *string                                                                                       `json:"email"`
	FirstName       string                                                                                        `json:"firstName"`
	ID              int64                                                                                         `json:"id"`
	Iso             *OnereturnsPutResponses201ContentApplication1jsonSchemaRecipientIsoIsoCountryV2               `json:"iso"`
	LastName        string                                                                                        `json:"lastName"`
	Phone           *string                                                                                       `json:"phone"`
	PostalCode      string                                                                                        `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                    `json:"updatedAt"`
	UpdatedBy       *OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy"`
}

type OnereturnsPutResponses201ContentApplication1jsonSchema struct {
	Items           []OnereturnsPutResponses201ContentApplication1jsonSchemaItems              `json:"items"`
	MerchantOrderID *string                                                                    `json:"merchantOrderId"`
	Recipient       OnereturnsPutResponses201ContentApplication1jsonSchemaRecipientConsigneeV2 `json:"recipient"`
	RmaNumber       string                                                                     `json:"rmaNumber"`
}

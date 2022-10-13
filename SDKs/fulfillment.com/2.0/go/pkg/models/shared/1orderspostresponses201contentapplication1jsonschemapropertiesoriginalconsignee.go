package shared

import (
	"time"
)

type OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoIsoCountryV2 struct {
	ID   *int64  `json:"id"`
	Iso2 *string `json:"iso2"`
	Name *string `json:"name"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee struct {
	Address1        string                                                                                            `json:"address1"`
	Address2        *string                                                                                           `json:"address2"`
	AddressLocality string                                                                                            `json:"addressLocality"`
	AddressRegion   string                                                                                            `json:"addressRegion"`
	CompanyName     *string                                                                                           `json:"companyName"`
	Country         string                                                                                            `json:"country"`
	Email           *string                                                                                           `json:"email"`
	FirstName       string                                                                                            `json:"firstName"`
	ID              int64                                                                                             `json:"id"`
	Iso             *OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoIsoCountryV2 `json:"iso"`
	LastName        string                                                                                            `json:"lastName"`
	Phone           *string                                                                                           `json:"phone"`
	PostalCode      string                                                                                            `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                        `json:"updatedAt"`
	UpdatedBy       *OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy     `json:"updatedBy"`
}

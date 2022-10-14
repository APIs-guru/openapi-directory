package shared

import (
	"time"
)

type OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoIsoCountryV2 struct {
	ID   *int64  `json:"id,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Name *string `json:"name,omitempty"`
}

type OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee struct {
	Address1        string                                                                                            `json:"address1"`
	Address2        *string                                                                                           `json:"address2,omitempty"`
	AddressLocality string                                                                                            `json:"addressLocality"`
	AddressRegion   string                                                                                            `json:"addressRegion"`
	CompanyName     *string                                                                                           `json:"companyName,omitempty"`
	Country         string                                                                                            `json:"country"`
	Email           *string                                                                                           `json:"email,omitempty"`
	FirstName       string                                                                                            `json:"firstName"`
	ID              int64                                                                                             `json:"id"`
	Iso             *OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoIsoCountryV2 `json:"iso,omitempty"`
	LastName        string                                                                                            `json:"lastName"`
	Phone           *string                                                                                           `json:"phone,omitempty"`
	PostalCode      string                                                                                            `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                        `json:"updatedAt,omitempty"`
	UpdatedBy       *OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy     `json:"updatedBy,omitempty"`
}

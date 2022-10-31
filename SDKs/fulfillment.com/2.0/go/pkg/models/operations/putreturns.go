package operations

import (
"time"
"openapi/pkg/models/shared")

type PutReturnsRmaRequestV2Items struct {
    QuantityExpected int64 `json:"quantityExpected"`
    Sku string `json:"sku"`
    
}

type PutReturnsRmaRequestV2 struct {
    Items []PutReturnsRmaRequestV2Items `json:"items"`
    MerchantOrderID *string `json:"merchantOrderId,omitempty"`
    Recipient shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient `json:"recipient"`
    RmaNumber string `json:"rmaNumber"`
    
}

type PutReturnsSecurity struct {
    FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
    
}

type PutReturnsRequest struct {
    Request PutReturnsRmaRequestV2 `request:"mediaType=application/json"`
    Security PutReturnsSecurity 
    
}

type PutReturnsRmaResponseV2Items struct {
    QuantityExpected int64 `json:"quantityExpected"`
    Sku string `json:"sku"`
    
}

type PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 struct {
    ID *int64 `json:"id,omitempty"`
    Iso2 *string `json:"iso2,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type PutReturnsRmaResponseV2ConsigneeV2 struct {
    Address1 string `json:"address1"`
    Address2 *string `json:"address2,omitempty"`
    AddressLocality string `json:"addressLocality"`
    AddressRegion string `json:"addressRegion"`
    CompanyName *string `json:"companyName,omitempty"`
    Country string `json:"country"`
    Email *string `json:"email,omitempty"`
    FirstName string `json:"firstName"`
    ID int64 `json:"id"`
    Iso *PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 `json:"iso,omitempty"`
    LastName string `json:"lastName"`
    Phone *string `json:"phone,omitempty"`
    PostalCode string `json:"postalCode"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    UpdatedBy *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy,omitempty"`
    
}

type PutReturnsRmaResponseV2 struct {
    Items []PutReturnsRmaResponseV2Items `json:"items"`
    MerchantOrderID *string `json:"merchantOrderId,omitempty"`
    Recipient PutReturnsRmaResponseV2ConsigneeV2 `json:"recipient"`
    RmaNumber string `json:"rmaNumber"`
    
}

type PutReturnsResponse struct {
    ContentType string 
    RmaResponseV2 *PutReturnsRmaResponseV2 
    StatusCode int64 
    OneordersGetResponses404ContentApplication1jsonSchema *shared.OneordersGetResponses404ContentApplication1jsonSchema 
    OnereturnsPutResponses201ContentApplication1jsonSchema *shared.OnereturnsPutResponses201ContentApplication1jsonSchema 
    
}


package shared




type AddressTypeEnum string

const (
    AddressTypeEnumPrimary AddressTypeEnum = "primary"
AddressTypeEnumSecondary AddressTypeEnum = "secondary"
AddressTypeEnumHome AddressTypeEnum = "home"
AddressTypeEnumOffice AddressTypeEnum = "office"
AddressTypeEnumShipping AddressTypeEnum = "shipping"
AddressTypeEnumBilling AddressTypeEnum = "billing"
AddressTypeEnumOther AddressTypeEnum = "other"
)


type Address struct {
    City *string `json:"city,omitempty"`
    ContactName *string `json:"contact_name,omitempty"`
    Country *string `json:"country,omitempty"`
    County *string `json:"county,omitempty"`
    Email *string `json:"email,omitempty"`
    Fax *string `json:"fax,omitempty"`
    ID *string `json:"id,omitempty"`
    Latitude *string `json:"latitude,omitempty"`
    Line1 *string `json:"line1,omitempty"`
    Line2 *string `json:"line2,omitempty"`
    Line3 *string `json:"line3,omitempty"`
    Line4 *string `json:"line4,omitempty"`
    Longitude *string `json:"longitude,omitempty"`
    Name *string `json:"name,omitempty"`
    PhoneNumber *string `json:"phone_number,omitempty"`
    PostalCode *string `json:"postal_code,omitempty"`
    RowVersion *string `json:"row_version,omitempty"`
    Salutation *string `json:"salutation,omitempty"`
    State *string `json:"state,omitempty"`
    StreetNumber *string `json:"street_number,omitempty"`
    String *string `json:"string,omitempty"`
    Type *AddressTypeEnum `json:"type,omitempty"`
    Website *string `json:"website,omitempty"`
    
}


package shared

type AddressTypeEnum string

const (
	AddressTypeEnumPrimary   AddressTypeEnum = "primary"
	AddressTypeEnumSecondary AddressTypeEnum = "secondary"
	AddressTypeEnumHome      AddressTypeEnum = "home"
	AddressTypeEnumOffice    AddressTypeEnum = "office"
	AddressTypeEnumShipping  AddressTypeEnum = "shipping"
	AddressTypeEnumBilling   AddressTypeEnum = "billing"
	AddressTypeEnumOther     AddressTypeEnum = "other"
)

type Address struct {
	City         *string          `json:"city"`
	ContactName  *string          `json:"contact_name"`
	Country      *string          `json:"country"`
	County       *string          `json:"county"`
	Email        *string          `json:"email"`
	Fax          *string          `json:"fax"`
	ID           *string          `json:"id"`
	Latitude     *string          `json:"latitude"`
	Line1        *string          `json:"line1"`
	Line2        *string          `json:"line2"`
	Line3        *string          `json:"line3"`
	Line4        *string          `json:"line4"`
	Longitude    *string          `json:"longitude"`
	Name         *string          `json:"name"`
	PhoneNumber  *string          `json:"phone_number"`
	PostalCode   *string          `json:"postal_code"`
	RowVersion   *string          `json:"row_version"`
	Salutation   *string          `json:"salutation"`
	State        *string          `json:"state"`
	StreetNumber *string          `json:"street_number"`
	String       *string          `json:"string"`
	Type         *AddressTypeEnum `json:"type"`
	Website      *string          `json:"website"`
}

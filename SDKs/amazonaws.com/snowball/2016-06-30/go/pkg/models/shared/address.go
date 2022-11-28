package shared

// Address
// The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.
type Address struct {
	AddressID            *string `json:"AddressId,omitempty"`
	City                 *string `json:"City,omitempty"`
	Company              *string `json:"Company,omitempty"`
	Country              *string `json:"Country,omitempty"`
	IsRestricted         *bool   `json:"IsRestricted,omitempty"`
	Landmark             *string `json:"Landmark,omitempty"`
	Name                 *string `json:"Name,omitempty"`
	PhoneNumber          *string `json:"PhoneNumber,omitempty"`
	PostalCode           *string `json:"PostalCode,omitempty"`
	PrefectureOrDistrict *string `json:"PrefectureOrDistrict,omitempty"`
	StateOrProvince      *string `json:"StateOrProvince,omitempty"`
	Street1              *string `json:"Street1,omitempty"`
	Street2              *string `json:"Street2,omitempty"`
	Street3              *string `json:"Street3,omitempty"`
}

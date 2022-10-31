package shared

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

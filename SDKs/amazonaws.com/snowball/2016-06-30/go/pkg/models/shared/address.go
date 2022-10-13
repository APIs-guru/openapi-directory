package shared

type Address struct {
	AddressID            *string `json:"AddressId"`
	City                 *string `json:"City"`
	Company              *string `json:"Company"`
	Country              *string `json:"Country"`
	IsRestricted         *bool   `json:"IsRestricted"`
	Landmark             *string `json:"Landmark"`
	Name                 *string `json:"Name"`
	PhoneNumber          *string `json:"PhoneNumber"`
	PostalCode           *string `json:"PostalCode"`
	PrefectureOrDistrict *string `json:"PrefectureOrDistrict"`
	StateOrProvince      *string `json:"StateOrProvince"`
	Street1              *string `json:"Street1"`
	Street2              *string `json:"Street2"`
	Street3              *string `json:"Street3"`
}

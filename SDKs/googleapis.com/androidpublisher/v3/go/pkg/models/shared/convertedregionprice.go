package shared

// ConvertedRegionPrice
// A converted region price.
type ConvertedRegionPrice struct {
	Price      *Money  `json:"price,omitempty"`
	RegionCode *string `json:"regionCode,omitempty"`
	TaxAmount  *Money  `json:"taxAmount,omitempty"`
}

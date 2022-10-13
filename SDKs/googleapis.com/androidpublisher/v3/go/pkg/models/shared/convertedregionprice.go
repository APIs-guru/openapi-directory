package shared

type ConvertedRegionPrice struct {
	Price      *Money  `json:"price"`
	RegionCode *string `json:"regionCode"`
	TaxAmount  *Money  `json:"taxAmount"`
}

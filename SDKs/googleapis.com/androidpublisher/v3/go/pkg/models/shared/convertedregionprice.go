package shared



type ConvertedRegionPrice struct {
    Price *Money `json:"price,omitempty"`
    RegionCode *string `json:"regionCode,omitempty"`
    TaxAmount *Money `json:"taxAmount,omitempty"`
    
}


package shared

type DescribeAddressesResult struct {
	Addresses []Address `json:"Addresses,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}

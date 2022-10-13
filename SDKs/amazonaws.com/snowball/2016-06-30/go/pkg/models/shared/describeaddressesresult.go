package shared

type DescribeAddressesResult struct {
	Addresses []Address `json:"Addresses"`
	NextToken *string   `json:"NextToken"`
}

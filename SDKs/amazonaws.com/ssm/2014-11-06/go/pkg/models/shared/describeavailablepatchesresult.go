package shared

type DescribeAvailablePatchesResult struct {
	NextToken *string `json:"NextToken"`
	Patches   []Patch `json:"Patches"`
}

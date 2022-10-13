package shared

type DescribeInstancePatchesResult struct {
	NextToken *string               `json:"NextToken"`
	Patches   []PatchComplianceData `json:"Patches"`
}

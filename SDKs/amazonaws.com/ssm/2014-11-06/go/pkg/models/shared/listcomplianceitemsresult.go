package shared

type ListComplianceItemsResult struct {
	ComplianceItems []ComplianceItem `json:"ComplianceItems"`
	NextToken       *string          `json:"NextToken"`
}

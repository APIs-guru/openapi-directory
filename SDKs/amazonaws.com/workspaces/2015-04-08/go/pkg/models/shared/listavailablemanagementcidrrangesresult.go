package shared

type ListAvailableManagementCidrRangesResult struct {
	ManagementCidrRanges []string `json:"ManagementCidrRanges"`
	NextToken            *string  `json:"NextToken"`
}

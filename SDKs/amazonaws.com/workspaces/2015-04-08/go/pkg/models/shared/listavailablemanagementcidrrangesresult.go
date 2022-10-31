package shared

type ListAvailableManagementCidrRangesResult struct {
	ManagementCidrRanges []string `json:"ManagementCidrRanges,omitempty"`
	NextToken            *string  `json:"NextToken,omitempty"`
}

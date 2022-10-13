package shared

type ListIPSetsResponse struct {
	IPSets     []IPSetSummary `json:"IPSets"`
	NextMarker *string        `json:"NextMarker"`
}

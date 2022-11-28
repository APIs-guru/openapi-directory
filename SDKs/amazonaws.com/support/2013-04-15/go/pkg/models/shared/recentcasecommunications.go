package shared

// RecentCaseCommunications
// The five most recent communications associated with the case.
type RecentCaseCommunications struct {
	Communications []Communication `json:"communications,omitempty"`
	NextToken      *string         `json:"nextToken,omitempty"`
}

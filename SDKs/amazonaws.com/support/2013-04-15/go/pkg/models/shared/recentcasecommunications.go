package shared

type RecentCaseCommunications struct {
	Communications []Communication `json:"communications"`
	NextToken      *string         `json:"nextToken"`
}

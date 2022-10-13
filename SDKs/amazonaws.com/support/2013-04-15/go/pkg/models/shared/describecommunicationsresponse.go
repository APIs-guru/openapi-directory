package shared

type DescribeCommunicationsResponse struct {
	Communications []Communication `json:"communications"`
	NextToken      *string         `json:"nextToken"`
}

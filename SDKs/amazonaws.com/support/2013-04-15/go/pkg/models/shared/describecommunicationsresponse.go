package shared

// DescribeCommunicationsResponse
// The communications returned by the <a>DescribeCommunications</a> operation.
type DescribeCommunicationsResponse struct {
	Communications []Communication `json:"communications,omitempty"`
	NextToken      *string         `json:"nextToken,omitempty"`
}

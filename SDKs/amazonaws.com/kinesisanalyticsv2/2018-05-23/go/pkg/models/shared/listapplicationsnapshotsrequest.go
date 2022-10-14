package shared

type ListApplicationSnapshotsRequest struct {
	ApplicationName string  `json:"ApplicationName"`
	Limit           *int64  `json:"Limit,omitempty"`
	NextToken       *string `json:"NextToken,omitempty"`
}

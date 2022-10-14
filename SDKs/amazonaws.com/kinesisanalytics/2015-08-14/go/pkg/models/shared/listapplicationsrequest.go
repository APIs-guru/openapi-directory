package shared

type ListApplicationsRequest struct {
	ExclusiveStartApplicationName *string `json:"ExclusiveStartApplicationName,omitempty"`
	Limit                         *int64  `json:"Limit,omitempty"`
}

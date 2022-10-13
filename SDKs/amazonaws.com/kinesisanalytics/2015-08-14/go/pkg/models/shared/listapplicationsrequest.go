package shared

type ListApplicationsRequest struct {
	ExclusiveStartApplicationName *string `json:"ExclusiveStartApplicationName"`
	Limit                         *int64  `json:"Limit"`
}

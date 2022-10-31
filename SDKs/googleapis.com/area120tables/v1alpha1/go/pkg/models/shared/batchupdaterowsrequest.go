package shared

type BatchUpdateRowsRequest struct {
	Requests []UpdateRowRequest `json:"requests,omitempty"`
}

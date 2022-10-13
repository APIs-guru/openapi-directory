package shared

type BatchCreateRowsRequest struct {
	Requests []CreateRowRequest `json:"requests"`
}

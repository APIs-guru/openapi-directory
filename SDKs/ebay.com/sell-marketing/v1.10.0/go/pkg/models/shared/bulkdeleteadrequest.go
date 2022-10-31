package shared

type BulkDeleteAdRequest struct {
	Requests []DeleteAdRequest `json:"requests,omitempty"`
}

package shared

type BatchUpdateRowsResponse struct {
	Rows []Row `json:"rows,omitempty"`
}

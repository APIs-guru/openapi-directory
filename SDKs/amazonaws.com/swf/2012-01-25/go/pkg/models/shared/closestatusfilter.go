package shared

// CloseStatusFilter
// Used to filter the closed workflow executions in visibility APIs by their close status.
type CloseStatusFilter struct {
	Status CloseStatusEnum `json:"status"`
}

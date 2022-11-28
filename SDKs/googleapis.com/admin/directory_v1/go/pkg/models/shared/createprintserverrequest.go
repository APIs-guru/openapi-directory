package shared

// CreatePrintServerRequestInput
// Request for adding a new print server.
type CreatePrintServerRequestInput struct {
	Parent      *string           `json:"parent,omitempty"`
	PrintServer *PrintServerInput `json:"printServer,omitempty"`
}

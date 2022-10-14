package shared

type CreatePrintServerRequest struct {
	Parent      *string      `json:"parent,omitempty"`
	PrintServer *PrintServer `json:"printServer,omitempty"`
}

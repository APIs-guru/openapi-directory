package shared

type CreatePrintServerRequest struct {
	Parent      *string      `json:"parent"`
	PrintServer *PrintServer `json:"printServer"`
}

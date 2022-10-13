package shared

type Alert struct {
	ID            *string `json:"id"`
	IsDismissible *bool   `json:"isDismissible"`
	Kind          *string `json:"kind"`
	Message       *string `json:"message"`
	Severity      *string `json:"severity"`
	Type          *string `json:"type"`
}

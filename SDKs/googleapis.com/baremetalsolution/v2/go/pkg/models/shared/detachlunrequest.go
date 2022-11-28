package shared

// DetachLunRequest
// Message for detach specific LUN from an Instance.
type DetachLunRequest struct {
	Lun        *string `json:"lun,omitempty"`
	SkipReboot *bool   `json:"skipReboot,omitempty"`
}

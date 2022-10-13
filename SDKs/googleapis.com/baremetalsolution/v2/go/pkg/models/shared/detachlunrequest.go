package shared

type DetachLunRequest struct {
	Lun        *string `json:"lun"`
	SkipReboot *bool   `json:"skipReboot"`
}

package shared



type DetachLunRequest struct {
    Lun *string `json:"lun,omitempty"`
    SkipReboot *bool `json:"skipReboot,omitempty"`
    
}


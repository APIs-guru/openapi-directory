package shared



type DeleteLicenseResponse struct {
    DeletionDate *string `json:"DeletionDate,omitempty"`
    Status *LicenseDeletionStatusEnum `json:"Status,omitempty"`
    
}


package shared



type CreateLicenseVersionResponse struct {
    LicenseArn *string `json:"LicenseArn,omitempty"`
    Status *LicenseStatusEnum `json:"Status,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}


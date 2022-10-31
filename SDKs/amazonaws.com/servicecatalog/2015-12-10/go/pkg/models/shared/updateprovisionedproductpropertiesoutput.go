package shared



type UpdateProvisionedProductPropertiesOutput struct {
    ProvisionedProductID *string `json:"ProvisionedProductId,omitempty"`
    ProvisionedProductProperties map[string]string `json:"ProvisionedProductProperties,omitempty"`
    RecordID *string `json:"RecordId,omitempty"`
    Status *RecordStatusEnum `json:"Status,omitempty"`
    
}


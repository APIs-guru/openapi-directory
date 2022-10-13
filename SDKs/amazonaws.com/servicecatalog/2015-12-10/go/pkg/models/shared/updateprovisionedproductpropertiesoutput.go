package shared

type UpdateProvisionedProductPropertiesOutput struct {
	ProvisionedProductID         *string           `json:"ProvisionedProductId"`
	ProvisionedProductProperties map[string]string `json:"ProvisionedProductProperties"`
	RecordID                     *string           `json:"RecordId"`
	Status                       *RecordStatusEnum `json:"Status"`
}

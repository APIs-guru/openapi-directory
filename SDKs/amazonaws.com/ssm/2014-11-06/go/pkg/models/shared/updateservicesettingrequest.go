package shared

// UpdateServiceSettingRequest
// The request body of the UpdateServiceSetting API operation.
type UpdateServiceSettingRequest struct {
	SettingID    string `json:"SettingId"`
	SettingValue string `json:"SettingValue"`
}

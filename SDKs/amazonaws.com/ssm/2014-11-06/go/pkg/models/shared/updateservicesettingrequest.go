package shared

type UpdateServiceSettingRequest struct {
	SettingID    string `json:"SettingId"`
	SettingValue string `json:"SettingValue"`
}

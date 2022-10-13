package shared

type CreateSettingModel struct {
	Hint        *string         `json:"hint"`
	Key         string          `json:"key"`
	Name        string          `json:"name"`
	SettingType SettingTypeEnum `json:"settingType"`
	Tags        []int64         `json:"tags"`
}

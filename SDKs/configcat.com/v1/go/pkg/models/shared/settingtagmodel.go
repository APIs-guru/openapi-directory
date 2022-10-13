package shared

type SettingTagModel struct {
	Color        *string `json:"color"`
	Name         *string `json:"name"`
	SettingTagID *int64  `json:"settingTagId"`
	TagID        *int64  `json:"tagId"`
}

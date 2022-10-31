package shared

type SettingTagModel struct {
	Color        *string `json:"color,omitempty"`
	Name         *string `json:"name,omitempty"`
	SettingTagID *int64  `json:"settingTagId,omitempty"`
	TagID        *int64  `json:"tagId,omitempty"`
}

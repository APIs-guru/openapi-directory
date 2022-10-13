package shared

type ThemeTypeEnum string

const (
	ThemeTypeEnumBackground ThemeTypeEnum = "Background"
	ThemeTypeEnumText       ThemeTypeEnum = "Text"
	ThemeTypeEnumCustom     ThemeTypeEnum = "Custom"
)

type Theme struct {
	Colors []ThemeColor  `json:"colors"`
	Type   ThemeTypeEnum `json:"type"`
}

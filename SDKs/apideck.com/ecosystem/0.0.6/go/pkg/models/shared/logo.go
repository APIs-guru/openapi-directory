package shared

type LogoTypeEnum string

const (
	LogoTypeEnumLogo       LogoTypeEnum = "LOGO"
	LogoTypeEnumBanner     LogoTypeEnum = "BANNER"
	LogoTypeEnumScreenshot LogoTypeEnum = "SCREENSHOT"
)

type Logo struct {
	ContentType *string       `json:"content_type"`
	ID          *string       `json:"id"`
	Type        *LogoTypeEnum `json:"type"`
	URL         string        `json:"url"`
}

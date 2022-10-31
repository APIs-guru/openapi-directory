package shared




type LogoTypeEnum string

const (
    LogoTypeEnumLogo LogoTypeEnum = "LOGO"
LogoTypeEnumBanner LogoTypeEnum = "BANNER"
LogoTypeEnumScreenshot LogoTypeEnum = "SCREENSHOT"
)


type Logo struct {
    ContentType *string `json:"content_type,omitempty"`
    ID *string `json:"id,omitempty"`
    Type *LogoTypeEnum `json:"type,omitempty"`
    URL string `json:"url"`
    
}


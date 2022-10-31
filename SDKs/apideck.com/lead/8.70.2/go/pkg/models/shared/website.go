package shared




type WebsiteTypeEnum string

const (
    WebsiteTypeEnumPrimary WebsiteTypeEnum = "primary"
WebsiteTypeEnumSecondary WebsiteTypeEnum = "secondary"
WebsiteTypeEnumWork WebsiteTypeEnum = "work"
WebsiteTypeEnumPersonal WebsiteTypeEnum = "personal"
WebsiteTypeEnumOther WebsiteTypeEnum = "other"
)


type Website struct {
    ID *string `json:"id,omitempty"`
    Type *WebsiteTypeEnum `json:"type,omitempty"`
    URL string `json:"url"`
    
}


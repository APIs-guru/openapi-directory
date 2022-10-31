package shared




type AuthTypeEnum string

const (
    AuthTypeEnumOauth2 AuthTypeEnum = "oauth2"
AuthTypeEnumAPIKey AuthTypeEnum = "apiKey"
AuthTypeEnumBasic AuthTypeEnum = "basic"
AuthTypeEnumCustom AuthTypeEnum = "custom"
AuthTypeEnumNone AuthTypeEnum = "none"
)



package shared

type ContentTypeEnum string

const (
	ContentTypeEnumPlainText     ContentTypeEnum = "PlainText"
	ContentTypeEnumSsml          ContentTypeEnum = "SSML"
	ContentTypeEnumCustomPayload ContentTypeEnum = "CustomPayload"
)

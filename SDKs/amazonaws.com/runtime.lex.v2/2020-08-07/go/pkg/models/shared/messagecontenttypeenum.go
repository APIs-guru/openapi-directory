package shared

type MessageContentTypeEnum string

const (
	MessageContentTypeEnumCustomPayload     MessageContentTypeEnum = "CustomPayload"
	MessageContentTypeEnumImageResponseCard MessageContentTypeEnum = "ImageResponseCard"
	MessageContentTypeEnumPlainText         MessageContentTypeEnum = "PlainText"
	MessageContentTypeEnumSsml              MessageContentTypeEnum = "SSML"
)

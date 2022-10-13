package operations

import (
	"openapi/pkg/models/shared"
)

type PostImageActionPathParams struct {
	ImageID int64 `pathParam:"style=simple,explode=false,name=image_id"`
}

type PostImageActionRequestBody1TypeEnum string

const (
	PostImageActionRequestBody1TypeEnumConvert  PostImageActionRequestBody1TypeEnum = "convert"
	PostImageActionRequestBody1TypeEnumTransfer PostImageActionRequestBody1TypeEnum = "transfer"
)

type PostImageActionRequestBody1 struct {
	Type PostImageActionRequestBody1TypeEnum `json:"type"`
}

type PostImageActionRequestBody2TypeEnum string

const (
	PostImageActionRequestBody2TypeEnumConvert  PostImageActionRequestBody2TypeEnum = "convert"
	PostImageActionRequestBody2TypeEnumTransfer PostImageActionRequestBody2TypeEnum = "transfer"
)

type PostImageActionRequestBody2 struct {
	Region shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
	Type   PostImageActionRequestBody2TypeEnum                                                                                                     `json:"type"`
}

type PostImageActionRequest struct {
	PathParams PostImageActionPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostImageAction401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type PostImageActionResponse struct {
	ContentType                                                                           string
	Headers                                                                               map[string][]string
	StatusCode                                                                            int64
	PostImageAction401ApplicationJSONObject                                               *PostImageAction401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema                             *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
	Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems *shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems
}

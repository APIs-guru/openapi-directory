package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsMoveCardPathParams struct {
	CardID int64 `pathParam:"style=simple,explode=false,name=card_id"`
}

type ProjectsMoveCardRequestBody struct {
	ColumnID *int64 `json:"column_id,omitempty"`
	Position string `json:"position"`
}

type ProjectsMoveCard403ApplicationJSONErrors struct {
	Code     *string `json:"code,omitempty"`
	Field    *string `json:"field,omitempty"`
	Message  *string `json:"message,omitempty"`
	Resource *string `json:"resource,omitempty"`
}

type ProjectsMoveCard403ApplicationJSON struct {
	DocumentationURL *string                                    `json:"documentation_url,omitempty"`
	Errors           []ProjectsMoveCard403ApplicationJSONErrors `json:"errors,omitempty"`
	Message          *string                                    `json:"message,omitempty"`
}

type ProjectsMoveCard503ApplicationJSONErrors struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type ProjectsMoveCard503ApplicationJSON struct {
	Code             *string                                    `json:"code,omitempty"`
	DocumentationURL *string                                    `json:"documentation_url,omitempty"`
	Errors           []ProjectsMoveCard503ApplicationJSONErrors `json:"errors,omitempty"`
	Message          *string                                    `json:"message,omitempty"`
}

type ProjectsMoveCardRequest struct {
	PathParams ProjectsMoveCardPathParams
	Request    *ProjectsMoveCardRequestBody `request:"mediaType=application/json"`
}

type ProjectsMoveCardResponse struct {
	ContentType                              string
	StatusCode                               int64
	BasicError                               *shared.BasicError
	ProjectsMoveCard201ApplicationJSONObject map[string]interface{}
	ProjectsMoveCard403ApplicationJSONObject *ProjectsMoveCard403ApplicationJSON
	ProjectsMoveCard503ApplicationJSONObject *ProjectsMoveCard503ApplicationJSON
	ValidationError                          *shared.ValidationError
}

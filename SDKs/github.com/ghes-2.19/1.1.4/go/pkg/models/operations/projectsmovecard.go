package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsMoveCardPathParams struct {
	CardID int64 `pathParam:"style=simple,explode=false,name=card_id"`
}

type ProjectsMoveCardRequestBody struct {
	ColumnID *int64 `json:"column_id"`
	Position string `json:"position"`
}

type ProjectsMoveCardRequest struct {
	PathParams ProjectsMoveCardPathParams
	Request    *ProjectsMoveCardRequestBody `request:"mediaType=application/json"`
}

type ProjectsMoveCard403ApplicationJSONErrors struct {
	Code     *string `json:"code"`
	Field    *string `json:"field"`
	Message  *string `json:"message"`
	Resource *string `json:"resource"`
}

type ProjectsMoveCard403ApplicationJSON struct {
	DocumentationURL *string                                    `json:"documentation_url"`
	Errors           []ProjectsMoveCard403ApplicationJSONErrors `json:"errors"`
	Message          *string                                    `json:"message"`
}

type ProjectsMoveCard503ApplicationJSONErrors struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type ProjectsMoveCard503ApplicationJSON struct {
	Code             *string                                    `json:"code"`
	DocumentationURL *string                                    `json:"documentation_url"`
	Errors           []ProjectsMoveCard503ApplicationJSONErrors `json:"errors"`
	Message          *string                                    `json:"message"`
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

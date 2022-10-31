package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBotVersionPathParams struct {
	BotID string `pathParam:"style=simple,explode=false,name=botId"`
}

type CreateBotVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateBotVersionRequestBody struct {
	BotVersionLocaleSpecification map[string]shared.BotVersionLocaleDetails `json:"botVersionLocaleSpecification"`
	Description                   *string                                   `json:"description,omitempty"`
}

type CreateBotVersionRequest struct {
	PathParams CreateBotVersionPathParams
	Headers    CreateBotVersionHeaders
	Request    CreateBotVersionRequestBody `request:"mediaType=application/json"`
}

type CreateBotVersionResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateBotVersionResponse      *shared.CreateBotVersionResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

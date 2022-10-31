package operations

import (
	"openapi/pkg/models/shared"
)

type PostTextPathParams struct {
	BotAlias string `pathParam:"style=simple,explode=false,name=botAlias"`
	BotName  string `pathParam:"style=simple,explode=false,name=botName"`
	UserID   string `pathParam:"style=simple,explode=false,name=userId"`
}

type PostTextHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostTextRequestBody struct {
	ActiveContexts    []shared.ActiveContext `json:"activeContexts,omitempty"`
	InputText         string                 `json:"inputText"`
	RequestAttributes map[string]string      `json:"requestAttributes,omitempty"`
	SessionAttributes map[string]string      `json:"sessionAttributes,omitempty"`
}

type PostTextRequest struct {
	PathParams PostTextPathParams
	Headers    PostTextHeaders
	Request    PostTextRequestBody `request:"mediaType=application/json"`
}

type PostTextResponse struct {
	BadGatewayException       *interface{}
	BadRequestException       *interface{}
	ConflictException         *interface{}
	ContentType               string
	DependencyFailedException *interface{}
	InternalFailureException  *interface{}
	LimitExceededException    *interface{}
	LoopDetectedException     *interface{}
	NotFoundException         *interface{}
	PostTextResponse          *shared.PostTextResponse
	StatusCode                int64
}

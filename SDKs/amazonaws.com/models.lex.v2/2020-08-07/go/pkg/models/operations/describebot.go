package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBotPathParams struct {
	BotID string `pathParam:"style=simple,explode=false,name=botId"`
}

type DescribeBotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeBotRequest struct {
	PathParams DescribeBotPathParams
	Headers    DescribeBotHeaders
}

type DescribeBotResponse struct {
	ContentType                   string
	DescribeBotResponse           *shared.DescribeBotResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

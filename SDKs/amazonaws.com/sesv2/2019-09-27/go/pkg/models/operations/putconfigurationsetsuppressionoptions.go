package operations

import (
	"openapi/pkg/models/shared"
)

type PutConfigurationSetSuppressionOptionsPathParams struct {
	ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
}

type PutConfigurationSetSuppressionOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutConfigurationSetSuppressionOptionsRequestBody struct {
	SuppressedReasons []shared.SuppressionListReasonEnum `json:"SuppressedReasons,omitempty"`
}

type PutConfigurationSetSuppressionOptionsRequest struct {
	PathParams PutConfigurationSetSuppressionOptionsPathParams
	Headers    PutConfigurationSetSuppressionOptionsHeaders
	Request    PutConfigurationSetSuppressionOptionsRequestBody `request:"mediaType=application/json"`
}

type PutConfigurationSetSuppressionOptionsResponse struct {
	BadRequestException                           *interface{}
	ContentType                                   string
	NotFoundException                             *interface{}
	PutConfigurationSetSuppressionOptionsResponse map[string]interface{}
	StatusCode                                    int64
	TooManyRequestsException                      *interface{}
}

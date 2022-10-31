package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptEulasPathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type AcceptEulasHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type AcceptEulasRequestBody struct {
	EulaIds []string `json:"eulaIds,omitempty"`
}

type AcceptEulasRequest struct {
	PathParams AcceptEulasPathParams
	Headers    AcceptEulasHeaders
	Request    AcceptEulasRequestBody `request:"mediaType=application/json"`
}

type AcceptEulasResponse struct {
	AcceptEulasResponse           *shared.AcceptEulasResponse
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

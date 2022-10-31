package operations

import (
	"openapi/pkg/models/shared"
)

type GetTraceGraphQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetTraceGraphHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetTraceGraphRequestBody struct {
	NextToken *string  `json:"NextToken,omitempty"`
	TraceIds  []string `json:"TraceIds"`
}

type GetTraceGraphRequest struct {
	QueryParams GetTraceGraphQueryParams
	Headers     GetTraceGraphHeaders
	Request     GetTraceGraphRequestBody `request:"mediaType=application/json"`
}

type GetTraceGraphResponse struct {
	ContentType             string
	GetTraceGraphResult     *shared.GetTraceGraphResult
	InvalidRequestException *interface{}
	StatusCode              int64
	ThrottledException      *interface{}
}

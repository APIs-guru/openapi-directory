package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsageTotalsQueryParams struct {
	TimeRange *string `queryParam:"style=form,explode=true,name=timeRange"`
}

type GetUsageTotalsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUsageTotalsRequest struct {
	QueryParams GetUsageTotalsQueryParams
	Headers     GetUsageTotalsHeaders
}

type GetUsageTotalsResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	GetUsageTotalsResponse        *shared.GetUsageTotalsResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

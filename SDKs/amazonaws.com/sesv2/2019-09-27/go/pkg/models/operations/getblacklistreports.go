package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlacklistReportsQueryParams struct {
	BlacklistItemNames []string `queryParam:"style=form,explode=true,name=BlacklistItemNames"`
}

type GetBlacklistReportsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetBlacklistReportsRequest struct {
	QueryParams GetBlacklistReportsQueryParams
	Headers     GetBlacklistReportsHeaders
}

type GetBlacklistReportsResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetBlacklistReportsResponse *shared.GetBlacklistReportsResponse
	NotFoundException           *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListSuppressedDestinationsQueryParams struct {
	EndDate   *time.Time                         `queryParam:"style=form,explode=true,name=EndDate"`
	NextToken *string                            `queryParam:"style=form,explode=true,name=NextToken"`
	PageSize  *int64                             `queryParam:"style=form,explode=true,name=PageSize"`
	Reason    []shared.SuppressionListReasonEnum `queryParam:"style=form,explode=true,name=Reason"`
	StartDate *time.Time                         `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListSuppressedDestinationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListSuppressedDestinationsRequest struct {
	QueryParams ListSuppressedDestinationsQueryParams
	Headers     ListSuppressedDestinationsHeaders
}

type ListSuppressedDestinationsResponse struct {
	BadRequestException                *interface{}
	ContentType                        string
	InvalidNextTokenException          *interface{}
	ListSuppressedDestinationsResponse *shared.ListSuppressedDestinationsResponse
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}

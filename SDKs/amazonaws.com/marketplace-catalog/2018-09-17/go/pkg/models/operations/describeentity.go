package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEntityQueryParams struct {
	Catalog  string `queryParam:"style=form,explode=true,name=catalog"`
	EntityID string `queryParam:"style=form,explode=true,name=entityId"`
}

type DescribeEntityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeEntityRequest struct {
	QueryParams DescribeEntityQueryParams
	Headers     DescribeEntityHeaders
}

type DescribeEntityResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DescribeEntityResponse        *shared.DescribeEntityResponse
	InternalServiceException      *interface{}
	ResourceNotFoundException     *interface{}
	ResourceNotSupportedException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}

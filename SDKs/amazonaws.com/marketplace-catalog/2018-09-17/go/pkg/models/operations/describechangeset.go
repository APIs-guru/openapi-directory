package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeChangeSetQueryParams struct {
	Catalog     string `queryParam:"style=form,explode=true,name=catalog"`
	ChangeSetID string `queryParam:"style=form,explode=true,name=changeSetId"`
}

type DescribeChangeSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeChangeSetRequest struct {
	QueryParams DescribeChangeSetQueryParams
	Headers     DescribeChangeSetHeaders
}

type DescribeChangeSetResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeChangeSetResponse *shared.DescribeChangeSetResponse
	InternalServiceException  *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

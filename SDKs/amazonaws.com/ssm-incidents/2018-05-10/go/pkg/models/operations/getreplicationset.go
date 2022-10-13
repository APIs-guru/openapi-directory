package operations

import (
	"openapi/pkg/models/shared"
)

type GetReplicationSetQueryParams struct {
	Arn string `queryParam:"style=form,explode=true,name=arn"`
}

type GetReplicationSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetReplicationSetRequest struct {
	QueryParams GetReplicationSetQueryParams
	Headers     GetReplicationSetHeaders
}

type GetReplicationSetResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetReplicationSetOutput   *shared.GetReplicationSetOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

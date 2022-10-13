package operations

import (
	"openapi/pkg/models/shared"
)

type CancelChangeSetQueryParams struct {
	Catalog     string `queryParam:"style=form,explode=true,name=catalog"`
	ChangeSetID string `queryParam:"style=form,explode=true,name=changeSetId"`
}

type CancelChangeSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelChangeSetRequest struct {
	QueryParams CancelChangeSetQueryParams
	Headers     CancelChangeSetHeaders
}

type CancelChangeSetResponse struct {
	AccessDeniedException     *interface{}
	CancelChangeSetResponse   *shared.CancelChangeSetResponse
	ContentType               string
	InternalServiceException  *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

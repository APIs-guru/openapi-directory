package operations

import (
	"openapi/pkg/models/shared"
)

type CancelChangeSetQueryParams struct {
	Catalog     string `queryParam:"style=form,explode=true,name=catalog"`
	ChangeSetID string `queryParam:"style=form,explode=true,name=changeSetId"`
}

type CancelChangeSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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

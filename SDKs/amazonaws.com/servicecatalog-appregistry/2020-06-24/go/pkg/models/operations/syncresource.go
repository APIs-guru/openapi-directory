package operations

import (
	"openapi/pkg/models/shared"
)

type SyncResourceResourceTypeEnum string

const (
	SyncResourceResourceTypeEnumCfnStack SyncResourceResourceTypeEnum = "CFN_STACK"
)

type SyncResourcePathParams struct {
	Resource     string                       `pathParam:"style=simple,explode=false,name=resource"`
	ResourceType SyncResourceResourceTypeEnum `pathParam:"style=simple,explode=false,name=resourceType"`
}

type SyncResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SyncResourceRequest struct {
	PathParams SyncResourcePathParams
	Headers    SyncResourceHeaders
}

type SyncResourceResponse struct {
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	SyncResourceResponse      *shared.SyncResourceResponse
}

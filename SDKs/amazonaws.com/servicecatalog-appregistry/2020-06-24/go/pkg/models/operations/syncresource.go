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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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

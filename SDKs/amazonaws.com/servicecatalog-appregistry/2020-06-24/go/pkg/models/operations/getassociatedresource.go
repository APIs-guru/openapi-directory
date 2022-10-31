package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssociatedResourceResourceTypeEnum string

const (
	GetAssociatedResourceResourceTypeEnumCfnStack GetAssociatedResourceResourceTypeEnum = "CFN_STACK"
)

type GetAssociatedResourcePathParams struct {
	Application  string                                `pathParam:"style=simple,explode=false,name=application"`
	Resource     string                                `pathParam:"style=simple,explode=false,name=resource"`
	ResourceType GetAssociatedResourceResourceTypeEnum `pathParam:"style=simple,explode=false,name=resourceType"`
}

type GetAssociatedResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAssociatedResourceRequest struct {
	PathParams GetAssociatedResourcePathParams
	Headers    GetAssociatedResourceHeaders
}

type GetAssociatedResourceResponse struct {
	ContentType                   string
	GetAssociatedResourceResponse *shared.GetAssociatedResourceResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}

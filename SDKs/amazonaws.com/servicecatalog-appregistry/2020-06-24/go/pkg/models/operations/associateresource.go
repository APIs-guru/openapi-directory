package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateResourceResourceTypeEnum string

const (
	AssociateResourceResourceTypeEnumCfnStack AssociateResourceResourceTypeEnum = "CFN_STACK"
)

type AssociateResourcePathParams struct {
	Application  string                            `pathParam:"style=simple,explode=false,name=application"`
	Resource     string                            `pathParam:"style=simple,explode=false,name=resource"`
	ResourceType AssociateResourceResourceTypeEnum `pathParam:"style=simple,explode=false,name=resourceType"`
}

type AssociateResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type AssociateResourceRequest struct {
	PathParams AssociateResourcePathParams
	Headers    AssociateResourceHeaders
}

type AssociateResourceResponse struct {
	AssociateResourceResponse     *shared.AssociateResourceResponse
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
}

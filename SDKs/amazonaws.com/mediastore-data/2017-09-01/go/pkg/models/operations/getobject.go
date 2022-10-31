package operations

import (
	"openapi/pkg/models/shared"
)

type GetObjectPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=Path"`
}

type GetObjectHeaders struct {
	Range             *string `header:"style=simple,explode=false,name=Range"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetObjectRequest struct {
	PathParams GetObjectPathParams
	Headers    GetObjectHeaders
}

type GetObjectResponse struct {
	ContainerNotFoundException            *interface{}
	ContentType                           string
	GetObjectResponse                     *shared.GetObjectResponse
	InternalServerError                   *interface{}
	ObjectNotFoundException               *interface{}
	RequestedRangeNotSatisfiableException *interface{}
	StatusCode                            int64
}

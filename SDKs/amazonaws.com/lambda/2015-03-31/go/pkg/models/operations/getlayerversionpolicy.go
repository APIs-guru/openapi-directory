package operations

import (
	"openapi/pkg/models/shared"
)

type GetLayerVersionPolicyPathParams struct {
	LayerName     string `pathParam:"style=simple,explode=false,name=LayerName"`
	VersionNumber int64  `pathParam:"style=simple,explode=false,name=VersionNumber"`
}

type GetLayerVersionPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetLayerVersionPolicyRequest struct {
	PathParams GetLayerVersionPolicyPathParams
	Headers    GetLayerVersionPolicyHeaders
}

type GetLayerVersionPolicyResponse struct {
	ContentType                    string
	GetLayerVersionPolicyResponse  *shared.GetLayerVersionPolicyResponse
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}

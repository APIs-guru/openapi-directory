package operations

import (
	"openapi/pkg/models/shared"
)

type GetLayerVersionByArnFindEnum string

const (
	GetLayerVersionByArnFindEnumLayerVersion GetLayerVersionByArnFindEnum = "LayerVersion"
)

type GetLayerVersionByArnQueryParams struct {
	Arn  string                       `queryParam:"style=form,explode=true,name=Arn"`
	Find GetLayerVersionByArnFindEnum `queryParam:"style=form,explode=true,name=find"`
}

type GetLayerVersionByArnHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetLayerVersionByArnRequest struct {
	QueryParams GetLayerVersionByArnQueryParams
	Headers     GetLayerVersionByArnHeaders
}

type GetLayerVersionByArnResponse struct {
	ContentType                    string
	GetLayerVersionResponse        *shared.GetLayerVersionResponse
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}

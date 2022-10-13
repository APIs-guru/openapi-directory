package operations

import (
	"openapi/pkg/models/shared"
)

type GetParametersByPathQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetParametersByPathXAmzTargetEnum string

const (
	GetParametersByPathXAmzTargetEnumAmazonSsmGetParametersByPath GetParametersByPathXAmzTargetEnum = "AmazonSSM.GetParametersByPath"
)

type GetParametersByPathHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetParametersByPathXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetParametersByPathRequest struct {
	QueryParams GetParametersByPathQueryParams
	Headers     GetParametersByPathHeaders
	Request     shared.GetParametersByPathRequest `request:"mediaType=application/json"`
}

type GetParametersByPathResponse struct {
	ContentType               string
	GetParametersByPathResult *shared.GetParametersByPathResult
	InternalServerError       *interface{}
	InvalidFilterKey          *interface{}
	InvalidFilterOption       *interface{}
	InvalidFilterValue        *interface{}
	InvalidKeyID              *interface{}
	InvalidNextToken          *interface{}
	StatusCode                int64
}

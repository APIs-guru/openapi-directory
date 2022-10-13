package operations

import (
	"openapi/pkg/models/shared"
)

type GetParameterHistoryQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetParameterHistoryXAmzTargetEnum string

const (
	GetParameterHistoryXAmzTargetEnumAmazonSsmGetParameterHistory GetParameterHistoryXAmzTargetEnum = "AmazonSSM.GetParameterHistory"
)

type GetParameterHistoryHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetParameterHistoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetParameterHistoryRequest struct {
	QueryParams GetParameterHistoryQueryParams
	Headers     GetParameterHistoryHeaders
	Request     shared.GetParameterHistoryRequest `request:"mediaType=application/json"`
}

type GetParameterHistoryResponse struct {
	ContentType               string
	GetParameterHistoryResult *shared.GetParameterHistoryResult
	InternalServerError       *interface{}
	InvalidKeyID              *interface{}
	InvalidNextToken          *interface{}
	ParameterNotFound         *interface{}
	StatusCode                int64
}

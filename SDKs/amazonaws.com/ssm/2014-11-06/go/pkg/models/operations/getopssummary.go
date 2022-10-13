package operations

import (
	"openapi/pkg/models/shared"
)

type GetOpsSummaryQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetOpsSummaryXAmzTargetEnum string

const (
	GetOpsSummaryXAmzTargetEnumAmazonSsmGetOpsSummary GetOpsSummaryXAmzTargetEnum = "AmazonSSM.GetOpsSummary"
)

type GetOpsSummaryHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOpsSummaryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetOpsSummaryRequest struct {
	QueryParams GetOpsSummaryQueryParams
	Headers     GetOpsSummaryHeaders
	Request     shared.GetOpsSummaryRequest `request:"mediaType=application/json"`
}

type GetOpsSummaryResponse struct {
	ContentType                       string
	GetOpsSummaryResult               *shared.GetOpsSummaryResult
	InternalServerError               *interface{}
	InvalidAggregatorException        *interface{}
	InvalidFilter                     *interface{}
	InvalidNextToken                  *interface{}
	InvalidTypeNameException          *interface{}
	ResourceDataSyncNotFoundException *interface{}
	StatusCode                        int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEvaluationsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeEvaluationsXAmzTargetEnum string

const (
	DescribeEvaluationsXAmzTargetEnumAmazonMl20141212DescribeEvaluations DescribeEvaluationsXAmzTargetEnum = "AmazonML_20141212.DescribeEvaluations"
)

type DescribeEvaluationsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEvaluationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEvaluationsRequest struct {
	QueryParams DescribeEvaluationsQueryParams
	Headers     DescribeEvaluationsHeaders
	Request     shared.DescribeEvaluationsInput `request:"mediaType=application/json"`
}

type DescribeEvaluationsResponse struct {
	ContentType               string
	DescribeEvaluationsOutput *shared.DescribeEvaluationsOutput
	InternalServerException   *interface{}
	InvalidInputException     *interface{}
	StatusCode                int64
}

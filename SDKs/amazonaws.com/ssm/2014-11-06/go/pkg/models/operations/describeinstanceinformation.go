package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInstanceInformationQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeInstanceInformationXAmzTargetEnum string

const (
	DescribeInstanceInformationXAmzTargetEnumAmazonSsmDescribeInstanceInformation DescribeInstanceInformationXAmzTargetEnum = "AmazonSSM.DescribeInstanceInformation"
)

type DescribeInstanceInformationHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInstanceInformationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeInstanceInformationRequest struct {
	QueryParams DescribeInstanceInformationQueryParams
	Headers     DescribeInstanceInformationHeaders
	Request     shared.DescribeInstanceInformationRequest `request:"mediaType=application/json"`
}

type DescribeInstanceInformationResponse struct {
	ContentType                           string
	DescribeInstanceInformationResult     *shared.DescribeInstanceInformationResult
	InternalServerError                   *interface{}
	InvalidFilterKey                      *interface{}
	InvalidInstanceID                     *interface{}
	InvalidInstanceInformationFilterValue *interface{}
	InvalidNextToken                      *interface{}
	StatusCode                            int64
}

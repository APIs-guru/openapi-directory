package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInstancePatchStatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeInstancePatchStatesXAmzTargetEnum string

const (
	DescribeInstancePatchStatesXAmzTargetEnumAmazonSsmDescribeInstancePatchStates DescribeInstancePatchStatesXAmzTargetEnum = "AmazonSSM.DescribeInstancePatchStates"
)

type DescribeInstancePatchStatesHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInstancePatchStatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeInstancePatchStatesRequest struct {
	QueryParams DescribeInstancePatchStatesQueryParams
	Headers     DescribeInstancePatchStatesHeaders
	Request     shared.DescribeInstancePatchStatesRequest `request:"mediaType=application/json"`
}

type DescribeInstancePatchStatesResponse struct {
	ContentType                       string
	DescribeInstancePatchStatesResult *shared.DescribeInstancePatchStatesResult
	InternalServerError               *interface{}
	InvalidNextToken                  *interface{}
	StatusCode                        int64
}

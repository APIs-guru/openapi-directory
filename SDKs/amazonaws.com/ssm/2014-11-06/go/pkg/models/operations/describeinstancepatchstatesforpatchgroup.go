package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInstancePatchStatesForPatchGroupQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum string

const (
	DescribeInstancePatchStatesForPatchGroupXAmzTargetEnumAmazonSsmDescribeInstancePatchStatesForPatchGroup DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum = "AmazonSSM.DescribeInstancePatchStatesForPatchGroup"
)

type DescribeInstancePatchStatesForPatchGroupHeaders struct {
	XAmzAlgorithm     *string                                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeInstancePatchStatesForPatchGroupRequest struct {
	QueryParams DescribeInstancePatchStatesForPatchGroupQueryParams
	Headers     DescribeInstancePatchStatesForPatchGroupHeaders
	Request     shared.DescribeInstancePatchStatesForPatchGroupRequest `request:"mediaType=application/json"`
}

type DescribeInstancePatchStatesForPatchGroupResponse struct {
	ContentType                                    string
	DescribeInstancePatchStatesForPatchGroupResult *shared.DescribeInstancePatchStatesForPatchGroupResult
	InternalServerError                            *interface{}
	InvalidFilter                                  *interface{}
	InvalidNextToken                               *interface{}
	StatusCode                                     int64
}

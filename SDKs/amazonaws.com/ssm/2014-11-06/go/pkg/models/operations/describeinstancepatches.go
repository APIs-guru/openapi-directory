package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInstancePatchesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeInstancePatchesXAmzTargetEnum string

const (
	DescribeInstancePatchesXAmzTargetEnumAmazonSsmDescribeInstancePatches DescribeInstancePatchesXAmzTargetEnum = "AmazonSSM.DescribeInstancePatches"
)

type DescribeInstancePatchesHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInstancePatchesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeInstancePatchesRequest struct {
	QueryParams DescribeInstancePatchesQueryParams
	Headers     DescribeInstancePatchesHeaders
	Request     shared.DescribeInstancePatchesRequest `request:"mediaType=application/json"`
}

type DescribeInstancePatchesResponse struct {
	ContentType                   string
	DescribeInstancePatchesResult *shared.DescribeInstancePatchesResult
	InternalServerError           *interface{}
	InvalidFilter                 *interface{}
	InvalidInstanceID             *interface{}
	InvalidNextToken              *interface{}
	StatusCode                    int64
}

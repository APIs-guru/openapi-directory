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
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInstancePatchesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

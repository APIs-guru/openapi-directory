package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAcLsXAmzTargetEnum string

const (
	DescribeAcLsXAmzTargetEnumAmazonMemoryDbDescribeAcLs DescribeAcLsXAmzTargetEnum = "AmazonMemoryDB.DescribeACLs"
)

type DescribeAcLsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAcLsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAcLsRequest struct {
	Headers DescribeAcLsHeaders
	Request shared.DescribeAcLsRequest `request:"mediaType=application/json"`
}

type DescribeAcLsResponse struct {
	ACLNotFoundFault                     *interface{}
	ContentType                          string
	DescribeAcLsResponse                 *shared.DescribeAcLsResponse
	InvalidParameterCombinationException *interface{}
	StatusCode                           int64
}

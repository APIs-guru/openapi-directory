package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServiceUpdatesXAmzTargetEnum string

const (
	DescribeServiceUpdatesXAmzTargetEnumAmazonMemoryDbDescribeServiceUpdates DescribeServiceUpdatesXAmzTargetEnum = "AmazonMemoryDB.DescribeServiceUpdates"
)

type DescribeServiceUpdatesHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServiceUpdatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeServiceUpdatesRequest struct {
	Headers DescribeServiceUpdatesHeaders
	Request shared.DescribeServiceUpdatesRequest `request:"mediaType=application/json"`
}

type DescribeServiceUpdatesResponse struct {
	ContentType                          string
	DescribeServiceUpdatesResponse       *shared.DescribeServiceUpdatesResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	StatusCode                           int64
}

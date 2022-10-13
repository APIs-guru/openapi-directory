package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventsXAmzTargetEnum string

const (
	DescribeEventsXAmzTargetEnumAmazonMemoryDbDescribeEvents DescribeEventsXAmzTargetEnum = "AmazonMemoryDB.DescribeEvents"
)

type DescribeEventsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEventsRequest struct {
	Headers DescribeEventsHeaders
	Request shared.DescribeEventsRequest `request:"mediaType=application/json"`
}

type DescribeEventsResponse struct {
	ContentType                          string
	DescribeEventsResponse               *shared.DescribeEventsResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}

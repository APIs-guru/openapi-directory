package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDestinationsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeDestinationsXAmzTargetEnum string

const (
	DescribeDestinationsXAmzTargetEnumLogs20140328DescribeDestinations DescribeDestinationsXAmzTargetEnum = "Logs_20140328.DescribeDestinations"
)

type DescribeDestinationsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDestinationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDestinationsRequest struct {
	QueryParams DescribeDestinationsQueryParams
	Headers     DescribeDestinationsHeaders
	Request     shared.DescribeDestinationsRequest `request:"mediaType=application/json"`
}

type DescribeDestinationsResponse struct {
	ContentType                  string
	DescribeDestinationsResponse *shared.DescribeDestinationsResponse
	InvalidParameterException    *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
}

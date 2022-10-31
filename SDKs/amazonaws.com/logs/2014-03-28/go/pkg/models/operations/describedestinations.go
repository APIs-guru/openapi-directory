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
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDestinationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSubscriptionFiltersQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeSubscriptionFiltersXAmzTargetEnum string

const (
	DescribeSubscriptionFiltersXAmzTargetEnumLogs20140328DescribeSubscriptionFilters DescribeSubscriptionFiltersXAmzTargetEnum = "Logs_20140328.DescribeSubscriptionFilters"
)

type DescribeSubscriptionFiltersHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSubscriptionFiltersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSubscriptionFiltersRequest struct {
	QueryParams DescribeSubscriptionFiltersQueryParams
	Headers     DescribeSubscriptionFiltersHeaders
	Request     shared.DescribeSubscriptionFiltersRequest `request:"mediaType=application/json"`
}

type DescribeSubscriptionFiltersResponse struct {
	ContentType                         string
	DescribeSubscriptionFiltersResponse *shared.DescribeSubscriptionFiltersResponse
	InvalidParameterException           *interface{}
	ResourceNotFoundException           *interface{}
	ServiceUnavailableException         *interface{}
	StatusCode                          int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMetricFiltersQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeMetricFiltersXAmzTargetEnum string

const (
	DescribeMetricFiltersXAmzTargetEnumLogs20140328DescribeMetricFilters DescribeMetricFiltersXAmzTargetEnum = "Logs_20140328.DescribeMetricFilters"
)

type DescribeMetricFiltersHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMetricFiltersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeMetricFiltersRequest struct {
	QueryParams DescribeMetricFiltersQueryParams
	Headers     DescribeMetricFiltersHeaders
	Request     shared.DescribeMetricFiltersRequest `request:"mediaType=application/json"`
}

type DescribeMetricFiltersResponse struct {
	ContentType                   string
	DescribeMetricFiltersResponse *shared.DescribeMetricFiltersResponse
	InvalidParameterException     *interface{}
	ResourceNotFoundException     *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLogGroupsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeLogGroupsXAmzTargetEnum string

const (
	DescribeLogGroupsXAmzTargetEnumLogs20140328DescribeLogGroups DescribeLogGroupsXAmzTargetEnum = "Logs_20140328.DescribeLogGroups"
)

type DescribeLogGroupsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLogGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLogGroupsRequest struct {
	QueryParams DescribeLogGroupsQueryParams
	Headers     DescribeLogGroupsHeaders
	Request     shared.DescribeLogGroupsRequest `request:"mediaType=application/json"`
}

type DescribeLogGroupsResponse struct {
	ContentType                 string
	DescribeLogGroupsResponse   *shared.DescribeLogGroupsResponse
	InvalidParameterException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}

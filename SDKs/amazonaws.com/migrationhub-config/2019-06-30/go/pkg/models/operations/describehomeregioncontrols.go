package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHomeRegionControlsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeHomeRegionControlsXAmzTargetEnum string

const (
	DescribeHomeRegionControlsXAmzTargetEnumAwsMigrationHubMultiAccountServiceDescribeHomeRegionControls DescribeHomeRegionControlsXAmzTargetEnum = "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls"
)

type DescribeHomeRegionControlsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeHomeRegionControlsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeHomeRegionControlsRequest struct {
	QueryParams DescribeHomeRegionControlsQueryParams
	Headers     DescribeHomeRegionControlsHeaders
	Request     shared.DescribeHomeRegionControlsRequest `request:"mediaType=application/json"`
}

type DescribeHomeRegionControlsResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	DescribeHomeRegionControlsResult *shared.DescribeHomeRegionControlsResult
	InternalServerError              *interface{}
	InvalidInputException            *interface{}
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
}

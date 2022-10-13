package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePatchGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribePatchGroupsXAmzTargetEnum string

const (
	DescribePatchGroupsXAmzTargetEnumAmazonSsmDescribePatchGroups DescribePatchGroupsXAmzTargetEnum = "AmazonSSM.DescribePatchGroups"
)

type DescribePatchGroupsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePatchGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePatchGroupsRequest struct {
	QueryParams DescribePatchGroupsQueryParams
	Headers     DescribePatchGroupsHeaders
	Request     shared.DescribePatchGroupsRequest `request:"mediaType=application/json"`
}

type DescribePatchGroupsResponse struct {
	ContentType               string
	DescribePatchGroupsResult *shared.DescribePatchGroupsResult
	InternalServerError       *interface{}
	StatusCode                int64
}

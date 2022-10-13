package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInventoryDeletionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeInventoryDeletionsXAmzTargetEnum string

const (
	DescribeInventoryDeletionsXAmzTargetEnumAmazonSsmDescribeInventoryDeletions DescribeInventoryDeletionsXAmzTargetEnum = "AmazonSSM.DescribeInventoryDeletions"
)

type DescribeInventoryDeletionsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInventoryDeletionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeInventoryDeletionsRequest struct {
	QueryParams DescribeInventoryDeletionsQueryParams
	Headers     DescribeInventoryDeletionsHeaders
	Request     shared.DescribeInventoryDeletionsRequest `request:"mediaType=application/json"`
}

type DescribeInventoryDeletionsResponse struct {
	ContentType                      string
	DescribeInventoryDeletionsResult *shared.DescribeInventoryDeletionsResult
	InternalServerError              *interface{}
	InvalidDeletionIDException       *interface{}
	InvalidNextToken                 *interface{}
	StatusCode                       int64
}

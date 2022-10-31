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
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInventoryDeletionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

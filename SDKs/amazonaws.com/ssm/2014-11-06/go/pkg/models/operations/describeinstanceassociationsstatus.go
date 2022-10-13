package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInstanceAssociationsStatusQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeInstanceAssociationsStatusXAmzTargetEnum string

const (
	DescribeInstanceAssociationsStatusXAmzTargetEnumAmazonSsmDescribeInstanceAssociationsStatus DescribeInstanceAssociationsStatusXAmzTargetEnum = "AmazonSSM.DescribeInstanceAssociationsStatus"
)

type DescribeInstanceAssociationsStatusHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInstanceAssociationsStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeInstanceAssociationsStatusRequest struct {
	QueryParams DescribeInstanceAssociationsStatusQueryParams
	Headers     DescribeInstanceAssociationsStatusHeaders
	Request     shared.DescribeInstanceAssociationsStatusRequest `request:"mediaType=application/json"`
}

type DescribeInstanceAssociationsStatusResponse struct {
	ContentType                              string
	DescribeInstanceAssociationsStatusResult *shared.DescribeInstanceAssociationsStatusResult
	InternalServerError                      *interface{}
	InvalidInstanceID                        *interface{}
	InvalidNextToken                         *interface{}
	StatusCode                               int64
}

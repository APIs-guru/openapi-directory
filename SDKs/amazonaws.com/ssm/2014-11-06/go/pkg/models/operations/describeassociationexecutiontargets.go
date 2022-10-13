package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAssociationExecutionTargetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeAssociationExecutionTargetsXAmzTargetEnum string

const (
	DescribeAssociationExecutionTargetsXAmzTargetEnumAmazonSsmDescribeAssociationExecutionTargets DescribeAssociationExecutionTargetsXAmzTargetEnum = "AmazonSSM.DescribeAssociationExecutionTargets"
)

type DescribeAssociationExecutionTargetsHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAssociationExecutionTargetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAssociationExecutionTargetsRequest struct {
	QueryParams DescribeAssociationExecutionTargetsQueryParams
	Headers     DescribeAssociationExecutionTargetsHeaders
	Request     shared.DescribeAssociationExecutionTargetsRequest `request:"mediaType=application/json"`
}

type DescribeAssociationExecutionTargetsResponse struct {
	AssociationDoesNotExist                   *interface{}
	AssociationExecutionDoesNotExist          *interface{}
	ContentType                               string
	DescribeAssociationExecutionTargetsResult *shared.DescribeAssociationExecutionTargetsResult
	InternalServerError                       *interface{}
	InvalidNextToken                          *interface{}
	StatusCode                                int64
}

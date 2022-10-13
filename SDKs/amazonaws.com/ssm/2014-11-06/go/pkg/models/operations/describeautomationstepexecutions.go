package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAutomationStepExecutionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeAutomationStepExecutionsXAmzTargetEnum string

const (
	DescribeAutomationStepExecutionsXAmzTargetEnumAmazonSsmDescribeAutomationStepExecutions DescribeAutomationStepExecutionsXAmzTargetEnum = "AmazonSSM.DescribeAutomationStepExecutions"
)

type DescribeAutomationStepExecutionsHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAutomationStepExecutionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAutomationStepExecutionsRequest struct {
	QueryParams DescribeAutomationStepExecutionsQueryParams
	Headers     DescribeAutomationStepExecutionsHeaders
	Request     shared.DescribeAutomationStepExecutionsRequest `request:"mediaType=application/json"`
}

type DescribeAutomationStepExecutionsResponse struct {
	AutomationExecutionNotFoundException   *interface{}
	ContentType                            string
	DescribeAutomationStepExecutionsResult *shared.DescribeAutomationStepExecutionsResult
	InternalServerError                    *interface{}
	InvalidFilterKey                       *interface{}
	InvalidFilterValue                     *interface{}
	InvalidNextToken                       *interface{}
	StatusCode                             int64
}

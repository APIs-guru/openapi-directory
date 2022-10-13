package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeActivityTypeXAmzTargetEnum string

const (
	DescribeActivityTypeXAmzTargetEnumSimpleWorkflowServiceDescribeActivityType DescribeActivityTypeXAmzTargetEnum = "SimpleWorkflowService.DescribeActivityType"
)

type DescribeActivityTypeHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeActivityTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeActivityTypeRequest struct {
	Headers DescribeActivityTypeHeaders
	Request shared.DescribeActivityTypeInput `request:"mediaType=application/json"`
}

type DescribeActivityTypeResponse struct {
	ActivityTypeDetail         *shared.ActivityTypeDetail
	ContentType                string
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}

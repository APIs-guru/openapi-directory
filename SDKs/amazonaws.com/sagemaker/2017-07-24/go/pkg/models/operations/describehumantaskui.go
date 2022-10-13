package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHumanTaskUIXAmzTargetEnum string

const (
	DescribeHumanTaskUIXAmzTargetEnumSageMakerDescribeHumanTaskUI DescribeHumanTaskUIXAmzTargetEnum = "SageMaker.DescribeHumanTaskUi"
)

type DescribeHumanTaskUIHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeHumanTaskUIXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeHumanTaskUIRequest struct {
	Headers DescribeHumanTaskUIHeaders
	Request shared.DescribeHumanTaskUIRequest `request:"mediaType=application/json"`
}

type DescribeHumanTaskUIResponse struct {
	ContentType                 string
	DescribeHumanTaskUIResponse *shared.DescribeHumanTaskUIResponse
	ResourceNotFound            *interface{}
	StatusCode                  int64
}

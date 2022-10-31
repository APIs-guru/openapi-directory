package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHumanTaskUIXAmzTargetEnum string

const (
	DescribeHumanTaskUIXAmzTargetEnumSageMakerDescribeHumanTaskUI DescribeHumanTaskUIXAmzTargetEnum = "SageMaker.DescribeHumanTaskUi"
)

type DescribeHumanTaskUIHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeHumanTaskUIXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

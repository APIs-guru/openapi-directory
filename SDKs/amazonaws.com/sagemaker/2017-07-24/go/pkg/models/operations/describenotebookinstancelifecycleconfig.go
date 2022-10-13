package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum string

const (
	DescribeNotebookInstanceLifecycleConfigXAmzTargetEnumSageMakerDescribeNotebookInstanceLifecycleConfig DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum = "SageMaker.DescribeNotebookInstanceLifecycleConfig"
)

type DescribeNotebookInstanceLifecycleConfigHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeNotebookInstanceLifecycleConfigRequest struct {
	Headers DescribeNotebookInstanceLifecycleConfigHeaders
	Request shared.DescribeNotebookInstanceLifecycleConfigInput `request:"mediaType=application/json"`
}

type DescribeNotebookInstanceLifecycleConfigResponse struct {
	ContentType                                   string
	DescribeNotebookInstanceLifecycleConfigOutput *shared.DescribeNotebookInstanceLifecycleConfigOutput
	StatusCode                                    int64
}

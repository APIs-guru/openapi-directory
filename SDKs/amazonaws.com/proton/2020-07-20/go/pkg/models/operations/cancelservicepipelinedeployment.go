package operations

import (
	"openapi/pkg/models/shared"
)

type CancelServicePipelineDeploymentXAmzTargetEnum string

const (
	CancelServicePipelineDeploymentXAmzTargetEnumAwsProton20200720CancelServicePipelineDeployment CancelServicePipelineDeploymentXAmzTargetEnum = "AwsProton20200720.CancelServicePipelineDeployment"
)

type CancelServicePipelineDeploymentHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelServicePipelineDeploymentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CancelServicePipelineDeploymentRequest struct {
	Headers CancelServicePipelineDeploymentHeaders
	Request shared.CancelServicePipelineDeploymentInput `request:"mediaType=application/json"`
}

type CancelServicePipelineDeploymentResponse struct {
	AccessDeniedException                 *interface{}
	CancelServicePipelineDeploymentOutput *shared.CancelServicePipelineDeploymentOutput
	ConflictException                     *interface{}
	ContentType                           string
	InternalServerException               *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
	ValidationException                   *interface{}
}

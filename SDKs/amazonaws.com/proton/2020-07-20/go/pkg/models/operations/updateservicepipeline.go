package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServicePipelineXAmzTargetEnum string

const (
	UpdateServicePipelineXAmzTargetEnumAwsProton20200720UpdateServicePipeline UpdateServicePipelineXAmzTargetEnum = "AwsProton20200720.UpdateServicePipeline"
)

type UpdateServicePipelineHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServicePipelineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServicePipelineRequest struct {
	Headers UpdateServicePipelineHeaders
	Request shared.UpdateServicePipelineInput `request:"mediaType=application/json"`
}

type UpdateServicePipelineResponse struct {
	AccessDeniedException       *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UpdateServicePipelineOutput *shared.UpdateServicePipelineOutput
	ValidationException         *interface{}
}

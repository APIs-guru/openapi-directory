package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServicePipelineXAmzTargetEnum string

const (
	UpdateServicePipelineXAmzTargetEnumAwsProton20200720UpdateServicePipeline UpdateServicePipelineXAmzTargetEnum = "AwsProton20200720.UpdateServicePipeline"
)

type UpdateServicePipelineHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServicePipelineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

package operations

import (
	"openapi/pkg/models/shared"
)

type StartProjectVersionXAmzTargetEnum string

const (
	StartProjectVersionXAmzTargetEnumRekognitionServiceStartProjectVersion StartProjectVersionXAmzTargetEnum = "RekognitionService.StartProjectVersion"
)

type StartProjectVersionHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartProjectVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartProjectVersionRequest struct {
	Headers StartProjectVersionHeaders
	Request shared.StartProjectVersionRequest `request:"mediaType=application/json"`
}

type StartProjectVersionResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	LimitExceededException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceInUseException                 *interface{}
	ResourceNotFoundException              *interface{}
	StartProjectVersionResponse            *shared.StartProjectVersionResponse
	StatusCode                             int64
	ThrottlingException                    *interface{}
}

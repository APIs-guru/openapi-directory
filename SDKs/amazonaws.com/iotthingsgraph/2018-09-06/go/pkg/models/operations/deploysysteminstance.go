package operations

import (
	"openapi/pkg/models/shared"
)

type DeploySystemInstanceXAmzTargetEnum string

const (
	DeploySystemInstanceXAmzTargetEnumIotThingsGraphFrontEndServiceDeploySystemInstance DeploySystemInstanceXAmzTargetEnum = "IotThingsGraphFrontEndService.DeploySystemInstance"
)

type DeploySystemInstanceHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeploySystemInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeploySystemInstanceRequest struct {
	Headers DeploySystemInstanceHeaders
	Request shared.DeploySystemInstanceRequest `request:"mediaType=application/json"`
}

type DeploySystemInstanceResponse struct {
	ContentType                  string
	DeploySystemInstanceResponse *shared.DeploySystemInstanceResponse
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceInUseException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}

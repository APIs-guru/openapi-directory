package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAppXAmzTargetEnum string

const (
	UpdateAppXAmzTargetEnumAwsServerMigrationServiceV20161024UpdateApp UpdateAppXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.UpdateApp"
)

type UpdateAppHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAppXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAppRequest struct {
	Headers UpdateAppHeaders
	Request shared.UpdateAppRequest `request:"mediaType=application/json"`
}

type UpdateAppResponse struct {
	ContentType                       string
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
	UpdateAppResponse                 *shared.UpdateAppResponse
}

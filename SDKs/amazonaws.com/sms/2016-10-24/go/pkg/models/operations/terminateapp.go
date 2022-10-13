package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateAppXAmzTargetEnum string

const (
	TerminateAppXAmzTargetEnumAwsServerMigrationServiceV20161024TerminateApp TerminateAppXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.TerminateApp"
)

type TerminateAppHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TerminateAppXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TerminateAppRequest struct {
	Headers TerminateAppHeaders
	Request shared.TerminateAppRequest `request:"mediaType=application/json"`
}

type TerminateAppResponse struct {
	ContentType                       string
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	TerminateAppResponse              map[string]interface{}
	UnauthorizedOperationException    *interface{}
}

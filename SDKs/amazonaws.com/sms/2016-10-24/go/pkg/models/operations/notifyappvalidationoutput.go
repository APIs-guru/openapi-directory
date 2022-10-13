package operations

import (
	"openapi/pkg/models/shared"
)

type NotifyAppValidationOutputXAmzTargetEnum string

const (
	NotifyAppValidationOutputXAmzTargetEnumAwsServerMigrationServiceV20161024NotifyAppValidationOutput NotifyAppValidationOutputXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput"
)

type NotifyAppValidationOutputHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        NotifyAppValidationOutputXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type NotifyAppValidationOutputRequest struct {
	Headers NotifyAppValidationOutputHeaders
	Request shared.NotifyAppValidationOutputRequest `request:"mediaType=application/json"`
}

type NotifyAppValidationOutputResponse struct {
	ContentType                       string
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	NotifyAppValidationOutputResponse map[string]interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}

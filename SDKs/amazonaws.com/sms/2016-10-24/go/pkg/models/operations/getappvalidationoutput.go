package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppValidationOutputXAmzTargetEnum string

const (
	GetAppValidationOutputXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppValidationOutput GetAppValidationOutputXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetAppValidationOutput"
)

type GetAppValidationOutputHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAppValidationOutputXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAppValidationOutputRequest struct {
	Headers GetAppValidationOutputHeaders
	Request shared.GetAppValidationOutputRequest `request:"mediaType=application/json"`
}

type GetAppValidationOutputResponse struct {
	ContentType                       string
	GetAppValidationOutputResponse    *shared.GetAppValidationOutputResponse
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}

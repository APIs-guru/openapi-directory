package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppValidationConfigurationXAmzTargetEnum string

const (
	GetAppValidationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppValidationConfiguration GetAppValidationConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration"
)

type GetAppValidationConfigurationHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAppValidationConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAppValidationConfigurationRequest struct {
	Headers GetAppValidationConfigurationHeaders
	Request shared.GetAppValidationConfigurationRequest `request:"mediaType=application/json"`
}

type GetAppValidationConfigurationResponse struct {
	ContentType                           string
	GetAppValidationConfigurationResponse *shared.GetAppValidationConfigurationResponse
	InternalError                         *interface{}
	InvalidParameterException             *interface{}
	MissingRequiredParameterException     *interface{}
	OperationNotPermittedException        *interface{}
	StatusCode                            int64
	UnauthorizedOperationException        *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAppValidationConfigurationXAmzTargetEnum string

const (
	DeleteAppValidationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteAppValidationConfiguration DeleteAppValidationConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration"
)

type DeleteAppValidationConfigurationHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAppValidationConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAppValidationConfigurationRequest struct {
	Headers DeleteAppValidationConfigurationHeaders
	Request shared.DeleteAppValidationConfigurationRequest `request:"mediaType=application/json"`
}

type DeleteAppValidationConfigurationResponse struct {
	ContentType                              string
	DeleteAppValidationConfigurationResponse map[string]interface{}
	InternalError                            *interface{}
	InvalidParameterException                *interface{}
	MissingRequiredParameterException        *interface{}
	OperationNotPermittedException           *interface{}
	StatusCode                               int64
	UnauthorizedOperationException           *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAppLaunchConfigurationXAmzTargetEnum string

const (
	DeleteAppLaunchConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteAppLaunchConfiguration DeleteAppLaunchConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration"
)

type DeleteAppLaunchConfigurationHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAppLaunchConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAppLaunchConfigurationRequest struct {
	Headers DeleteAppLaunchConfigurationHeaders
	Request shared.DeleteAppLaunchConfigurationRequest `request:"mediaType=application/json"`
}

type DeleteAppLaunchConfigurationResponse struct {
	ContentType                          string
	DeleteAppLaunchConfigurationResponse map[string]interface{}
	InternalError                        *interface{}
	InvalidParameterException            *interface{}
	MissingRequiredParameterException    *interface{}
	OperationNotPermittedException       *interface{}
	StatusCode                           int64
	UnauthorizedOperationException       *interface{}
}

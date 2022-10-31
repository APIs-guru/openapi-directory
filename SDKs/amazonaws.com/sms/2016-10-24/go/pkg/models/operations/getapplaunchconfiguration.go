package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppLaunchConfigurationXAmzTargetEnum string

const (
	GetAppLaunchConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppLaunchConfiguration GetAppLaunchConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration"
)

type GetAppLaunchConfigurationHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAppLaunchConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAppLaunchConfigurationRequest struct {
	Headers GetAppLaunchConfigurationHeaders
	Request shared.GetAppLaunchConfigurationRequest `request:"mediaType=application/json"`
}

type GetAppLaunchConfigurationResponse struct {
	ContentType                       string
	GetAppLaunchConfigurationResponse *shared.GetAppLaunchConfigurationResponse
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}

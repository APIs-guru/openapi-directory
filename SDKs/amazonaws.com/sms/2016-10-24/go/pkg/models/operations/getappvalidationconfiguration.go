package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppValidationConfigurationXAmzTargetEnum string

const (
	GetAppValidationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppValidationConfiguration GetAppValidationConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration"
)

type GetAppValidationConfigurationHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAppValidationConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

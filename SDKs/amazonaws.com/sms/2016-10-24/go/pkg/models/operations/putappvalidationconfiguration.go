package operations

import (
	"openapi/pkg/models/shared"
)

type PutAppValidationConfigurationXAmzTargetEnum string

const (
	PutAppValidationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024PutAppValidationConfiguration PutAppValidationConfigurationXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration"
)

type PutAppValidationConfigurationHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAppValidationConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutAppValidationConfigurationRequest struct {
	Headers PutAppValidationConfigurationHeaders
	Request shared.PutAppValidationConfigurationRequest `request:"mediaType=application/json"`
}

type PutAppValidationConfigurationResponse struct {
	ContentType                           string
	InternalError                         *interface{}
	InvalidParameterException             *interface{}
	MissingRequiredParameterException     *interface{}
	OperationNotPermittedException        *interface{}
	PutAppValidationConfigurationResponse map[string]interface{}
	StatusCode                            int64
	UnauthorizedOperationException        *interface{}
}

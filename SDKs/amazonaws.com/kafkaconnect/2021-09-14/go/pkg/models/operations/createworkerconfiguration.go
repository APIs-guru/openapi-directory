package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkerConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateWorkerConfigurationRequestBody struct {
	Description           *string `json:"description,omitempty"`
	Name                  string  `json:"name"`
	PropertiesFileContent string  `json:"propertiesFileContent"`
}

type CreateWorkerConfigurationRequest struct {
	Headers CreateWorkerConfigurationHeaders
	Request CreateWorkerConfigurationRequestBody `request:"mediaType=application/json"`
}

type CreateWorkerConfigurationResponse struct {
	BadRequestException               *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	CreateWorkerConfigurationResponse *shared.CreateWorkerConfigurationResponse
	ForbiddenException                *interface{}
	InternalServerErrorException      *interface{}
	NotFoundException                 *interface{}
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UnauthorizedException             *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountSettingsXAmzTargetEnum string

const (
	GetAccountSettingsXAmzTargetEnumAwsProton20200720GetAccountSettings GetAccountSettingsXAmzTargetEnum = "AwsProton20200720.GetAccountSettings"
)

type GetAccountSettingsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAccountSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAccountSettingsRequest struct {
	Headers GetAccountSettingsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetAccountSettingsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetAccountSettingsOutput  *shared.GetAccountSettingsOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}

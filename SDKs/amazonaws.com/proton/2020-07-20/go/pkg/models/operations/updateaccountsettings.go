package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountSettingsXAmzTargetEnum string

const (
	UpdateAccountSettingsXAmzTargetEnumAwsProton20200720UpdateAccountSettings UpdateAccountSettingsXAmzTargetEnum = "AwsProton20200720.UpdateAccountSettings"
)

type UpdateAccountSettingsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAccountSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAccountSettingsRequest struct {
	Headers UpdateAccountSettingsHeaders
	Request shared.UpdateAccountSettingsInput `request:"mediaType=application/json"`
}

type UpdateAccountSettingsResponse struct {
	AccessDeniedException       *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UpdateAccountSettingsOutput *shared.UpdateAccountSettingsOutput
	ValidationException         *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEmergencyContactSettingsXAmzTargetEnum string

const (
	UpdateEmergencyContactSettingsXAmzTargetEnumAwsShield20160616UpdateEmergencyContactSettings UpdateEmergencyContactSettingsXAmzTargetEnum = "AWSShield_20160616.UpdateEmergencyContactSettings"
)

type UpdateEmergencyContactSettingsHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEmergencyContactSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateEmergencyContactSettingsRequest struct {
	Headers UpdateEmergencyContactSettingsHeaders
	Request shared.UpdateEmergencyContactSettingsRequest `request:"mediaType=application/json"`
}

type UpdateEmergencyContactSettingsResponse struct {
	ContentType                            string
	InternalErrorException                 *interface{}
	InvalidParameterException              *interface{}
	OptimisticLockException                *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	UpdateEmergencyContactSettingsResponse map[string]interface{}
}

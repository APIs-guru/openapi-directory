package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLaunchConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum string

const (
	UpdateLaunchConfigurationRequestBodyLaunchDispositionEnumStopped UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum = "STOPPED"
	UpdateLaunchConfigurationRequestBodyLaunchDispositionEnumStarted UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum = "STARTED"
)

type UpdateLaunchConfigurationRequestBodyLicensing struct {
	OsByol *bool `json:"osByol"`
}

type UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum string

const (
	UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnumNone  UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum = "NONE"
	UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnumBasic UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum = "BASIC"
)

type UpdateLaunchConfigurationRequestBody struct {
	CopyPrivateIP                       *bool                                                                        `json:"copyPrivateIp"`
	CopyTags                            *bool                                                                        `json:"copyTags"`
	LaunchDisposition                   *UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum                   `json:"launchDisposition"`
	Licensing                           *UpdateLaunchConfigurationRequestBodyLicensing                               `json:"licensing"`
	Name                                *string                                                                      `json:"name"`
	SourceServerID                      string                                                                       `json:"sourceServerID"`
	TargetInstanceTypeRightSizingMethod *UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum `json:"targetInstanceTypeRightSizingMethod"`
}

type UpdateLaunchConfigurationRequest struct {
	Headers UpdateLaunchConfigurationHeaders
	Request UpdateLaunchConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateLaunchConfigurationResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	LaunchConfiguration           *shared.LaunchConfiguration
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UninitializedAccountException *interface{}
	ValidationException           *interface{}
}

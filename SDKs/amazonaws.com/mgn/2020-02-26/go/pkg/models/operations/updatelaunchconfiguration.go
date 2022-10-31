package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLaunchConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum string

const (
	UpdateLaunchConfigurationRequestBodyLaunchDispositionEnumStopped UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum = "STOPPED"
	UpdateLaunchConfigurationRequestBodyLaunchDispositionEnumStarted UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum = "STARTED"
)

type UpdateLaunchConfigurationRequestBodyLicensing struct {
	OsByol *bool `json:"osByol,omitempty"`
}

type UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum string

const (
	UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnumNone  UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum = "NONE"
	UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnumBasic UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum = "BASIC"
)

type UpdateLaunchConfigurationRequestBody struct {
	CopyPrivateIP                       *bool                                                                        `json:"copyPrivateIp,omitempty"`
	CopyTags                            *bool                                                                        `json:"copyTags,omitempty"`
	LaunchDisposition                   *UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum                   `json:"launchDisposition,omitempty"`
	Licensing                           *UpdateLaunchConfigurationRequestBodyLicensing                               `json:"licensing,omitempty"`
	Name                                *string                                                                      `json:"name,omitempty"`
	SourceServerID                      string                                                                       `json:"sourceServerID"`
	TargetInstanceTypeRightSizingMethod *UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum `json:"targetInstanceTypeRightSizingMethod,omitempty"`
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

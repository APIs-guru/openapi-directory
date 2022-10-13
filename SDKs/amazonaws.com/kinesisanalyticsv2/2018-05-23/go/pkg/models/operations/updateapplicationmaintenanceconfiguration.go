package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApplicationMaintenanceConfigurationXAmzTargetEnum string

const (
	UpdateApplicationMaintenanceConfigurationXAmzTargetEnumKinesisAnalytics20180523UpdateApplicationMaintenanceConfiguration UpdateApplicationMaintenanceConfigurationXAmzTargetEnum = "KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration"
)

type UpdateApplicationMaintenanceConfigurationHeaders struct {
	XAmzAlgorithm     *string                                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateApplicationMaintenanceConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateApplicationMaintenanceConfigurationRequest struct {
	Headers UpdateApplicationMaintenanceConfigurationHeaders
	Request shared.UpdateApplicationMaintenanceConfigurationRequest `request:"mediaType=application/json"`
}

type UpdateApplicationMaintenanceConfigurationResponse struct {
	ConcurrentModificationException                   *interface{}
	ContentType                                       string
	InvalidArgumentException                          *interface{}
	ResourceInUseException                            *interface{}
	ResourceNotFoundException                         *interface{}
	StatusCode                                        int64
	UnsupportedOperationException                     *interface{}
	UpdateApplicationMaintenanceConfigurationResponse *shared.UpdateApplicationMaintenanceConfigurationResponse
}

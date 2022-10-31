package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProvisionedProductPropertiesXAmzTargetEnum string

const (
	UpdateProvisionedProductPropertiesXAmzTargetEnumAws242ServiceCatalogServiceUpdateProvisionedProductProperties UpdateProvisionedProductPropertiesXAmzTargetEnum = "AWS242ServiceCatalogService.UpdateProvisionedProductProperties"
)

type UpdateProvisionedProductPropertiesHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateProvisionedProductPropertiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateProvisionedProductPropertiesRequest struct {
	Headers UpdateProvisionedProductPropertiesHeaders
	Request shared.UpdateProvisionedProductPropertiesInput `request:"mediaType=application/json"`
}

type UpdateProvisionedProductPropertiesResponse struct {
	ContentType                              string
	InvalidParametersException               *interface{}
	InvalidStateException                    *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	UpdateProvisionedProductPropertiesOutput *shared.UpdateProvisionedProductPropertiesOutput
}

package operations

import (
	"openapi/pkg/models/shared"
)

type ListServiceActionsForProvisioningArtifactQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListServiceActionsForProvisioningArtifactXAmzTargetEnum string

const (
	ListServiceActionsForProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceListServiceActionsForProvisioningArtifact ListServiceActionsForProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact"
)

type ListServiceActionsForProvisioningArtifactHeaders struct {
	XAmzAlgorithm     *string                                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServiceActionsForProvisioningArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListServiceActionsForProvisioningArtifactRequest struct {
	QueryParams ListServiceActionsForProvisioningArtifactQueryParams
	Headers     ListServiceActionsForProvisioningArtifactHeaders
	Request     shared.ListServiceActionsForProvisioningArtifactInput `request:"mediaType=application/json"`
}

type ListServiceActionsForProvisioningArtifactResponse struct {
	ContentType                                     string
	InvalidParametersException                      *interface{}
	ListServiceActionsForProvisioningArtifactOutput *shared.ListServiceActionsForProvisioningArtifactOutput
	ResourceNotFoundException                       *interface{}
	StatusCode                                      int64
}

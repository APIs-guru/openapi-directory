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
	XAmzAlgorithm     *string                                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServiceActionsForProvisioningArtifactXAmzTargetEnum `header:"name=X-Amz-Target"`
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

package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum string

const (
	DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifact DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact"
)

type DisassociateServiceActionFromProvisioningArtifactHeaders struct {
	XAmzAlgorithm     *string                                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateServiceActionFromProvisioningArtifactRequest struct {
	Headers DisassociateServiceActionFromProvisioningArtifactHeaders
	Request shared.DisassociateServiceActionFromProvisioningArtifactInput `request:"mediaType=application/json"`
}

type DisassociateServiceActionFromProvisioningArtifactResponse struct {
	ContentType                                             string
	DisassociateServiceActionFromProvisioningArtifactOutput map[string]interface{}
	ResourceNotFoundException                               *interface{}
	StatusCode                                              int64
}

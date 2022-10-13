package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum string

const (
	BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifact BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact"
)

type BatchDisassociateServiceActionFromProvisioningArtifactHeaders struct {
	XAmzAlgorithm     *string                                                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDisassociateServiceActionFromProvisioningArtifactRequest struct {
	Headers BatchDisassociateServiceActionFromProvisioningArtifactHeaders
	Request shared.BatchDisassociateServiceActionFromProvisioningArtifactInput `request:"mediaType=application/json"`
}

type BatchDisassociateServiceActionFromProvisioningArtifactResponse struct {
	BatchDisassociateServiceActionFromProvisioningArtifactOutput *shared.BatchDisassociateServiceActionFromProvisioningArtifactOutput
	ContentType                                                  string
	InvalidParametersException                                   *interface{}
	StatusCode                                                   int64
}

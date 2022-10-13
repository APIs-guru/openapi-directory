package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum string

const (
	AssociateServiceActionWithProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifact AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact"
)

type AssociateServiceActionWithProvisioningArtifactHeaders struct {
	XAmzAlgorithm     *string                                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateServiceActionWithProvisioningArtifactRequest struct {
	Headers AssociateServiceActionWithProvisioningArtifactHeaders
	Request shared.AssociateServiceActionWithProvisioningArtifactInput `request:"mediaType=application/json"`
}

type AssociateServiceActionWithProvisioningArtifactResponse struct {
	AssociateServiceActionWithProvisioningArtifactOutput map[string]interface{}
	ContentType                                          string
	DuplicateResourceException                           *interface{}
	LimitExceededException                               *interface{}
	ResourceNotFoundException                            *interface{}
	StatusCode                                           int64
}

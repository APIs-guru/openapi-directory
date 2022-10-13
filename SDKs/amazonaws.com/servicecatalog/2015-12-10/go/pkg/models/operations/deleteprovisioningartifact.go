package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProvisioningArtifactXAmzTargetEnum string

const (
	DeleteProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceDeleteProvisioningArtifact DeleteProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.DeleteProvisioningArtifact"
)

type DeleteProvisioningArtifactHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteProvisioningArtifactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteProvisioningArtifactRequest struct {
	Headers DeleteProvisioningArtifactHeaders
	Request shared.DeleteProvisioningArtifactInput `request:"mediaType=application/json"`
}

type DeleteProvisioningArtifactResponse struct {
	ContentType                      string
	DeleteProvisioningArtifactOutput map[string]interface{}
	InvalidParametersException       *interface{}
	ResourceInUseException           *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}

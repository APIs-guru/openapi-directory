package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProvisioningArtifactXAmzTargetEnum string

const (
	CreateProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceCreateProvisioningArtifact CreateProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.CreateProvisioningArtifact"
)

type CreateProvisioningArtifactHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateProvisioningArtifactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateProvisioningArtifactRequest struct {
	Headers CreateProvisioningArtifactHeaders
	Request shared.CreateProvisioningArtifactInput `request:"mediaType=application/json"`
}

type CreateProvisioningArtifactResponse struct {
	ContentType                      string
	CreateProvisioningArtifactOutput *shared.CreateProvisioningArtifactOutput
	InvalidParametersException       *interface{}
	LimitExceededException           *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}

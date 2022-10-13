package operations

import (
	"openapi/pkg/models/shared"
)

type ListProvisioningArtifactsXAmzTargetEnum string

const (
	ListProvisioningArtifactsXAmzTargetEnumAws242ServiceCatalogServiceListProvisioningArtifacts ListProvisioningArtifactsXAmzTargetEnum = "AWS242ServiceCatalogService.ListProvisioningArtifacts"
)

type ListProvisioningArtifactsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProvisioningArtifactsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListProvisioningArtifactsRequest struct {
	Headers ListProvisioningArtifactsHeaders
	Request shared.ListProvisioningArtifactsInput `request:"mediaType=application/json"`
}

type ListProvisioningArtifactsResponse struct {
	ContentType                     string
	InvalidParametersException      *interface{}
	ListProvisioningArtifactsOutput *shared.ListProvisioningArtifactsOutput
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}

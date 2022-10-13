package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProvisioningArtifactXAmzTargetEnum string

const (
	DescribeProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisioningArtifact DescribeProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProvisioningArtifact"
)

type DescribeProvisioningArtifactHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProvisioningArtifactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeProvisioningArtifactRequest struct {
	Headers DescribeProvisioningArtifactHeaders
	Request shared.DescribeProvisioningArtifactInput `request:"mediaType=application/json"`
}

type DescribeProvisioningArtifactResponse struct {
	ContentType                        string
	DescribeProvisioningArtifactOutput *shared.DescribeProvisioningArtifactOutput
	InvalidParametersException         *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}

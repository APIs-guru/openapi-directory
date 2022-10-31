package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProvisioningArtifactXAmzTargetEnum string

const (
	DescribeProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisioningArtifact DescribeProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProvisioningArtifact"
)

type DescribeProvisioningArtifactHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProvisioningArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProvisioningParametersXAmzTargetEnum string

const (
	DescribeProvisioningParametersXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisioningParameters DescribeProvisioningParametersXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProvisioningParameters"
)

type DescribeProvisioningParametersHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProvisioningParametersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeProvisioningParametersRequest struct {
	Headers DescribeProvisioningParametersHeaders
	Request shared.DescribeProvisioningParametersInput `request:"mediaType=application/json"`
}

type DescribeProvisioningParametersResponse struct {
	ContentType                          string
	DescribeProvisioningParametersOutput *shared.DescribeProvisioningParametersOutput
	InvalidParametersException           *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}

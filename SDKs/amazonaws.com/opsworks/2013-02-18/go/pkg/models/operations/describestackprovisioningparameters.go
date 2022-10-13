package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStackProvisioningParametersXAmzTargetEnum string

const (
	DescribeStackProvisioningParametersXAmzTargetEnumOpsWorks20130218DescribeStackProvisioningParameters DescribeStackProvisioningParametersXAmzTargetEnum = "OpsWorks_20130218.DescribeStackProvisioningParameters"
)

type DescribeStackProvisioningParametersHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStackProvisioningParametersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeStackProvisioningParametersRequest struct {
	Headers DescribeStackProvisioningParametersHeaders
	Request shared.DescribeStackProvisioningParametersRequest `request:"mediaType=application/json"`
}

type DescribeStackProvisioningParametersResponse struct {
	ContentType                               string
	DescribeStackProvisioningParametersResult *shared.DescribeStackProvisioningParametersResult
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	ValidationException                       *interface{}
}

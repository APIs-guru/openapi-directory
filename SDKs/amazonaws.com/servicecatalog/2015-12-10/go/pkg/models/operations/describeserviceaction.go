package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServiceActionXAmzTargetEnum string

const (
	DescribeServiceActionXAmzTargetEnumAws242ServiceCatalogServiceDescribeServiceAction DescribeServiceActionXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeServiceAction"
)

type DescribeServiceActionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServiceActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeServiceActionRequest struct {
	Headers DescribeServiceActionHeaders
	Request shared.DescribeServiceActionInput `request:"mediaType=application/json"`
}

type DescribeServiceActionResponse struct {
	ContentType                 string
	DescribeServiceActionOutput *shared.DescribeServiceActionOutput
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}

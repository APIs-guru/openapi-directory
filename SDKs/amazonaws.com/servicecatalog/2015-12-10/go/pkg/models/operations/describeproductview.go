package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProductViewXAmzTargetEnum string

const (
	DescribeProductViewXAmzTargetEnumAws242ServiceCatalogServiceDescribeProductView DescribeProductViewXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProductView"
)

type DescribeProductViewHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProductViewXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeProductViewRequest struct {
	Headers DescribeProductViewHeaders
	Request shared.DescribeProductViewInput `request:"mediaType=application/json"`
}

type DescribeProductViewResponse struct {
	ContentType                string
	DescribeProductViewOutput  *shared.DescribeProductViewOutput
	InvalidParametersException *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}

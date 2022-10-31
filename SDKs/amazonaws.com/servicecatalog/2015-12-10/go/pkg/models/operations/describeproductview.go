package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProductViewXAmzTargetEnum string

const (
	DescribeProductViewXAmzTargetEnumAws242ServiceCatalogServiceDescribeProductView DescribeProductViewXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProductView"
)

type DescribeProductViewHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProductViewXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

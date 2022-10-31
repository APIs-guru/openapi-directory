package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProductXAmzTargetEnum string

const (
	DescribeProductXAmzTargetEnumAws242ServiceCatalogServiceDescribeProduct DescribeProductXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProduct"
)

type DescribeProductHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProductXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeProductRequest struct {
	Headers DescribeProductHeaders
	Request shared.DescribeProductInput `request:"mediaType=application/json"`
}

type DescribeProductResponse struct {
	ContentType                string
	DescribeProductOutput      *shared.DescribeProductOutput
	InvalidParametersException *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}

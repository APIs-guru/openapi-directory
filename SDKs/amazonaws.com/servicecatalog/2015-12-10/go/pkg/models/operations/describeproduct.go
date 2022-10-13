package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProductXAmzTargetEnum string

const (
	DescribeProductXAmzTargetEnumAws242ServiceCatalogServiceDescribeProduct DescribeProductXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProduct"
)

type DescribeProductHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProductXAmzTargetEnum `header:"name=X-Amz-Target"`
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

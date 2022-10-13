package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCopyProductStatusXAmzTargetEnum string

const (
	DescribeCopyProductStatusXAmzTargetEnumAws242ServiceCatalogServiceDescribeCopyProductStatus DescribeCopyProductStatusXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeCopyProductStatus"
)

type DescribeCopyProductStatusHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCopyProductStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCopyProductStatusRequest struct {
	Headers DescribeCopyProductStatusHeaders
	Request shared.DescribeCopyProductStatusInput `request:"mediaType=application/json"`
}

type DescribeCopyProductStatusResponse struct {
	ContentType                     string
	DescribeCopyProductStatusOutput *shared.DescribeCopyProductStatusOutput
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}

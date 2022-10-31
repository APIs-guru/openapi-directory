package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCopyProductStatusXAmzTargetEnum string

const (
	DescribeCopyProductStatusXAmzTargetEnumAws242ServiceCatalogServiceDescribeCopyProductStatus DescribeCopyProductStatusXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeCopyProductStatus"
)

type DescribeCopyProductStatusHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCopyProductStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

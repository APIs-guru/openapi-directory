package operations

import (
	"openapi/pkg/models/shared"
)

type CopyProductXAmzTargetEnum string

const (
	CopyProductXAmzTargetEnumAws242ServiceCatalogServiceCopyProduct CopyProductXAmzTargetEnum = "AWS242ServiceCatalogService.CopyProduct"
)

type CopyProductHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CopyProductXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CopyProductRequest struct {
	Headers CopyProductHeaders
	Request shared.CopyProductInput `request:"mediaType=application/json"`
}

type CopyProductResponse struct {
	ContentType                string
	CopyProductOutput          *shared.CopyProductOutput
	InvalidParametersException *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}

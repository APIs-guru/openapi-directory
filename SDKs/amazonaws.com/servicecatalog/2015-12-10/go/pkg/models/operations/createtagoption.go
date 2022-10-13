package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagOptionXAmzTargetEnum string

const (
	CreateTagOptionXAmzTargetEnumAws242ServiceCatalogServiceCreateTagOption CreateTagOptionXAmzTargetEnum = "AWS242ServiceCatalogService.CreateTagOption"
)

type CreateTagOptionHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTagOptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateTagOptionRequest struct {
	Headers CreateTagOptionHeaders
	Request shared.CreateTagOptionInput `request:"mediaType=application/json"`
}

type CreateTagOptionResponse struct {
	ContentType                   string
	CreateTagOptionOutput         *shared.CreateTagOptionOutput
	DuplicateResourceException    *interface{}
	LimitExceededException        *interface{}
	StatusCode                    int64
	TagOptionNotMigratedException *interface{}
}

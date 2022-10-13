package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTagOptionXAmzTargetEnum string

const (
	UpdateTagOptionXAmzTargetEnumAws242ServiceCatalogServiceUpdateTagOption UpdateTagOptionXAmzTargetEnum = "AWS242ServiceCatalogService.UpdateTagOption"
)

type UpdateTagOptionHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTagOptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateTagOptionRequest struct {
	Headers UpdateTagOptionHeaders
	Request shared.UpdateTagOptionInput `request:"mediaType=application/json"`
}

type UpdateTagOptionResponse struct {
	ContentType                   string
	DuplicateResourceException    *interface{}
	InvalidParametersException    *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TagOptionNotMigratedException *interface{}
	UpdateTagOptionOutput         *shared.UpdateTagOptionOutput
}

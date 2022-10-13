package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTagOptionXAmzTargetEnum string

const (
	DeleteTagOptionXAmzTargetEnumAws242ServiceCatalogServiceDeleteTagOption DeleteTagOptionXAmzTargetEnum = "AWS242ServiceCatalogService.DeleteTagOption"
)

type DeleteTagOptionHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTagOptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTagOptionRequest struct {
	Headers DeleteTagOptionHeaders
	Request shared.DeleteTagOptionInput `request:"mediaType=application/json"`
}

type DeleteTagOptionResponse struct {
	ContentType                   string
	DeleteTagOptionOutput         map[string]interface{}
	ResourceInUseException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TagOptionNotMigratedException *interface{}
}

package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateTagOptionWithResourceXAmzTargetEnum string

const (
	AssociateTagOptionWithResourceXAmzTargetEnumAws242ServiceCatalogServiceAssociateTagOptionWithResource AssociateTagOptionWithResourceXAmzTargetEnum = "AWS242ServiceCatalogService.AssociateTagOptionWithResource"
)

type AssociateTagOptionWithResourceHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateTagOptionWithResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateTagOptionWithResourceRequest struct {
	Headers AssociateTagOptionWithResourceHeaders
	Request shared.AssociateTagOptionWithResourceInput `request:"mediaType=application/json"`
}

type AssociateTagOptionWithResourceResponse struct {
	AssociateTagOptionWithResourceOutput map[string]interface{}
	ContentType                          string
	DuplicateResourceException           *interface{}
	InvalidParametersException           *interface{}
	InvalidStateException                *interface{}
	LimitExceededException               *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	TagOptionNotMigratedException        *interface{}
}

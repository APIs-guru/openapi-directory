package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateBudgetWithResourceXAmzTargetEnum string

const (
	AssociateBudgetWithResourceXAmzTargetEnumAws242ServiceCatalogServiceAssociateBudgetWithResource AssociateBudgetWithResourceXAmzTargetEnum = "AWS242ServiceCatalogService.AssociateBudgetWithResource"
)

type AssociateBudgetWithResourceHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateBudgetWithResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateBudgetWithResourceRequest struct {
	Headers AssociateBudgetWithResourceHeaders
	Request shared.AssociateBudgetWithResourceInput `request:"mediaType=application/json"`
}

type AssociateBudgetWithResourceResponse struct {
	AssociateBudgetWithResourceOutput map[string]interface{}
	ContentType                       string
	DuplicateResourceException        *interface{}
	InvalidParametersException        *interface{}
	LimitExceededException            *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}

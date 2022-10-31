package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateBudgetWithResourceXAmzTargetEnum string

const (
	AssociateBudgetWithResourceXAmzTargetEnumAws242ServiceCatalogServiceAssociateBudgetWithResource AssociateBudgetWithResourceXAmzTargetEnum = "AWS242ServiceCatalogService.AssociateBudgetWithResource"
)

type AssociateBudgetWithResourceHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateBudgetWithResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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

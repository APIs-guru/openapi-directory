package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateBudgetFromResourceXAmzTargetEnum string

const (
	DisassociateBudgetFromResourceXAmzTargetEnumAws242ServiceCatalogServiceDisassociateBudgetFromResource DisassociateBudgetFromResourceXAmzTargetEnum = "AWS242ServiceCatalogService.DisassociateBudgetFromResource"
)

type DisassociateBudgetFromResourceHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateBudgetFromResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateBudgetFromResourceRequest struct {
	Headers DisassociateBudgetFromResourceHeaders
	Request shared.DisassociateBudgetFromResourceInput `request:"mediaType=application/json"`
}

type DisassociateBudgetFromResourceResponse struct {
	ContentType                          string
	DisassociateBudgetFromResourceOutput map[string]interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}

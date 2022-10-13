package operations

import (
	"openapi/pkg/models/shared"
)

type RejectPortfolioShareXAmzTargetEnum string

const (
	RejectPortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceRejectPortfolioShare RejectPortfolioShareXAmzTargetEnum = "AWS242ServiceCatalogService.RejectPortfolioShare"
)

type RejectPortfolioShareHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RejectPortfolioShareXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RejectPortfolioShareRequest struct {
	Headers RejectPortfolioShareHeaders
	Request shared.RejectPortfolioShareInput `request:"mediaType=application/json"`
}

type RejectPortfolioShareResponse struct {
	ContentType                string
	RejectPortfolioShareOutput map[string]interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}

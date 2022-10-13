package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePortfolioShareXAmzTargetEnum string

const (
	DeletePortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceDeletePortfolioShare DeletePortfolioShareXAmzTargetEnum = "AWS242ServiceCatalogService.DeletePortfolioShare"
)

type DeletePortfolioShareHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePortfolioShareXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePortfolioShareRequest struct {
	Headers DeletePortfolioShareHeaders
	Request shared.DeletePortfolioShareInput `request:"mediaType=application/json"`
}

type DeletePortfolioShareResponse struct {
	ContentType                    string
	DeletePortfolioShareOutput     *shared.DeletePortfolioShareOutput
	InvalidParametersException     *interface{}
	InvalidStateException          *interface{}
	OperationNotSupportedException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}

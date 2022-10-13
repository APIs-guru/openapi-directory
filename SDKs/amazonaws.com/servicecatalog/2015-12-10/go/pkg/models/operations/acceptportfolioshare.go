package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptPortfolioShareXAmzTargetEnum string

const (
	AcceptPortfolioShareXAmzTargetEnumAws242ServiceCatalogServiceAcceptPortfolioShare AcceptPortfolioShareXAmzTargetEnum = "AWS242ServiceCatalogService.AcceptPortfolioShare"
)

type AcceptPortfolioShareHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptPortfolioShareXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AcceptPortfolioShareRequest struct {
	Headers AcceptPortfolioShareHeaders
	Request shared.AcceptPortfolioShareInput `request:"mediaType=application/json"`
}

type AcceptPortfolioShareResponse struct {
	AcceptPortfolioShareOutput map[string]interface{}
	ContentType                string
	InvalidParametersException *interface{}
	LimitExceededException     *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}

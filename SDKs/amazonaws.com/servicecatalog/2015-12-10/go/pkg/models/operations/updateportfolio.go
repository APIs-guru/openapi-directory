package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePortfolioXAmzTargetEnum string

const (
	UpdatePortfolioXAmzTargetEnumAws242ServiceCatalogServiceUpdatePortfolio UpdatePortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.UpdatePortfolio"
)

type UpdatePortfolioHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePortfolioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdatePortfolioRequest struct {
	Headers UpdatePortfolioHeaders
	Request shared.UpdatePortfolioInput `request:"mediaType=application/json"`
}

type UpdatePortfolioResponse struct {
	ContentType                   string
	InvalidParametersException    *interface{}
	LimitExceededException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TagOptionNotMigratedException *interface{}
	UpdatePortfolioOutput         *shared.UpdatePortfolioOutput
}

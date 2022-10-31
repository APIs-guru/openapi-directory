package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePortfolioXAmzTargetEnum string

const (
	DeletePortfolioXAmzTargetEnumAws242ServiceCatalogServiceDeletePortfolio DeletePortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.DeletePortfolio"
)

type DeletePortfolioHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePortfolioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeletePortfolioRequest struct {
	Headers DeletePortfolioHeaders
	Request shared.DeletePortfolioInput `request:"mediaType=application/json"`
}

type DeletePortfolioResponse struct {
	ContentType                   string
	DeletePortfolioOutput         map[string]interface{}
	InvalidParametersException    *interface{}
	ResourceInUseException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TagOptionNotMigratedException *interface{}
}

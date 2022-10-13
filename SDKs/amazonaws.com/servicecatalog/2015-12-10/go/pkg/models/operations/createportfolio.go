package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePortfolioXAmzTargetEnum string

const (
	CreatePortfolioXAmzTargetEnumAws242ServiceCatalogServiceCreatePortfolio CreatePortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.CreatePortfolio"
)

type CreatePortfolioHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePortfolioXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePortfolioRequest struct {
	Headers CreatePortfolioHeaders
	Request shared.CreatePortfolioInput `request:"mediaType=application/json"`
}

type CreatePortfolioResponse struct {
	ContentType                   string
	CreatePortfolioOutput         *shared.CreatePortfolioOutput
	InvalidParametersException    *interface{}
	LimitExceededException        *interface{}
	StatusCode                    int64
	TagOptionNotMigratedException *interface{}
}

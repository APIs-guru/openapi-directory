package operations

import (
	"openapi/pkg/models/shared"
)

type GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum string

const (
	GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnumSageMakerGetSagemakerServicecatalogPortfolioStatus GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum = "SageMaker.GetSagemakerServicecatalogPortfolioStatus"
)

type GetSagemakerServicecatalogPortfolioStatusHeaders struct {
	XAmzAlgorithm     *string                                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSagemakerServicecatalogPortfolioStatusRequest struct {
	Headers GetSagemakerServicecatalogPortfolioStatusHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetSagemakerServicecatalogPortfolioStatusResponse struct {
	ContentType                                     string
	GetSagemakerServicecatalogPortfolioStatusOutput *shared.GetSagemakerServicecatalogPortfolioStatusOutput
	StatusCode                                      int64
}

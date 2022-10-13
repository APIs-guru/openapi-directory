package operations

type EnableSagemakerServicecatalogPortfolioXAmzTargetEnum string

const (
	EnableSagemakerServicecatalogPortfolioXAmzTargetEnumSageMakerEnableSagemakerServicecatalogPortfolio EnableSagemakerServicecatalogPortfolioXAmzTargetEnum = "SageMaker.EnableSagemakerServicecatalogPortfolio"
)

type EnableSagemakerServicecatalogPortfolioHeaders struct {
	XAmzAlgorithm     *string                                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableSagemakerServicecatalogPortfolioXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableSagemakerServicecatalogPortfolioRequest struct {
	Headers EnableSagemakerServicecatalogPortfolioHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type EnableSagemakerServicecatalogPortfolioResponse struct {
	ContentType                                  string
	EnableSagemakerServicecatalogPortfolioOutput map[string]interface{}
	StatusCode                                   int64
}

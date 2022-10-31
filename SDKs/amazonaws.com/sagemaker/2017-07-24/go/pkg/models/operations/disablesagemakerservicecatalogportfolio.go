package operations




type DisableSagemakerServicecatalogPortfolioXAmzTargetEnum string

const (
    DisableSagemakerServicecatalogPortfolioXAmzTargetEnumSageMakerDisableSagemakerServicecatalogPortfolio DisableSagemakerServicecatalogPortfolioXAmzTargetEnum = "SageMaker.DisableSagemakerServicecatalogPortfolio"
)


type DisableSagemakerServicecatalogPortfolioHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisableSagemakerServicecatalogPortfolioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisableSagemakerServicecatalogPortfolioRequest struct {
    Headers DisableSagemakerServicecatalogPortfolioHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type DisableSagemakerServicecatalogPortfolioResponse struct {
    ContentType string 
    DisableSagemakerServicecatalogPortfolioOutput map[string]interface{} 
    StatusCode int64 
    
}


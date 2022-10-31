package operations




type EnableSagemakerServicecatalogPortfolioXAmzTargetEnum string

const (
    EnableSagemakerServicecatalogPortfolioXAmzTargetEnumSageMakerEnableSagemakerServicecatalogPortfolio EnableSagemakerServicecatalogPortfolioXAmzTargetEnum = "SageMaker.EnableSagemakerServicecatalogPortfolio"
)


type EnableSagemakerServicecatalogPortfolioHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget EnableSagemakerServicecatalogPortfolioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type EnableSagemakerServicecatalogPortfolioRequest struct {
    Headers EnableSagemakerServicecatalogPortfolioHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type EnableSagemakerServicecatalogPortfolioResponse struct {
    ContentType string 
    EnableSagemakerServicecatalogPortfolioOutput map[string]interface{} 
    StatusCode int64 
    
}


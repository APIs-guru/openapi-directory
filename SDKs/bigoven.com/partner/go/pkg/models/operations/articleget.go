package operations



type ArticleGetPathParams struct {
    UniqueKeyword string `pathParam:"style=simple,explode=false,name=uniqueKeyword"`
    
}

type ArticleGetRequest struct {
    PathParams ArticleGetPathParams 
    
}

type ArticleGetResponse struct {
    ContentType string 
    StatusCode int64 
    
}


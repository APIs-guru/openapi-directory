package operations



type ContentSearchHelpArticlesPathParams struct {
    Searchtext string `pathParam:"style=simple,explode=false,name=searchtext"`
    Size string `pathParam:"style=simple,explode=false,name=size"`
    
}

type ContentSearchHelpArticlesRequest struct {
    PathParams ContentSearchHelpArticlesPathParams 
    
}

type ContentSearchHelpArticlesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


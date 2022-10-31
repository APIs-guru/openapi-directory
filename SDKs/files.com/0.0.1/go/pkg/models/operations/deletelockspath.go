package operations



type DeleteLocksPathPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type DeleteLocksPathQueryParams struct {
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type DeleteLocksPathRequest struct {
    PathParams DeleteLocksPathPathParams 
    QueryParams DeleteLocksPathQueryParams 
    
}

type DeleteLocksPathResponse struct {
    ContentType string 
    StatusCode int64 
    
}


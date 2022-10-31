package operations



type DeleteTokenPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteTokenRequest struct {
    PathParams DeleteTokenPathParams 
    
}

type DeleteTokenResponse struct {
    ContentType string 
    StatusCode int64 
    
}


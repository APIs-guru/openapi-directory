package operations



type DeleteAdminBadgesIDJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteAdminBadgesIDJSONRequest struct {
    PathParams DeleteAdminBadgesIDJSONPathParams 
    
}

type DeleteAdminBadgesIDJSONResponse struct {
    ContentType string 
    StatusCode int64 
    
}


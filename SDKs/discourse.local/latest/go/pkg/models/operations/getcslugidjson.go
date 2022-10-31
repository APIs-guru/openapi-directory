package operations



type GetCSlugIDJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetCSlugIDJSONRequest struct {
    PathParams GetCSlugIDJSONPathParams 
    
}

type GetCSlugIDJSONResponse struct {
    ContentType string 
    GetCSlugIDJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}


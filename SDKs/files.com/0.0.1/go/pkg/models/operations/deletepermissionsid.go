package operations



type DeletePermissionsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeletePermissionsIDRequest struct {
    PathParams DeletePermissionsIDPathParams 
    
}

type DeletePermissionsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}


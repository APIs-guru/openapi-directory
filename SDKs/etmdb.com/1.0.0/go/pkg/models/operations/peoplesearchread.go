package operations



type PeopleSearchReadPathParams struct {
    User string `pathParam:"style=simple,explode=false,name=user"`
    
}

type PeopleSearchReadRequest struct {
    PathParams PeopleSearchReadPathParams 
    
}

type PeopleSearchReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}


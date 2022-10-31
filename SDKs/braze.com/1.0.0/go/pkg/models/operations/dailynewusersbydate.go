package operations



type DailyNewUsersByDateQueryParams struct {
    AppID *string `queryParam:"style=form,explode=true,name=app_id"`
    EndingAt *string `queryParam:"style=form,explode=true,name=ending_at"`
    Length *string `queryParam:"style=form,explode=true,name=length"`
    
}

type DailyNewUsersByDateRequest struct {
    QueryParams DailyNewUsersByDateQueryParams 
    
}

type DailyNewUsersByDateResponse struct {
    ContentType string 
    StatusCode int64 
    
}


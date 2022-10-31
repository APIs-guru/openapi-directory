package operations



type KpIsForDailyAppUninstallsByDateQueryParams struct {
    AppID *string `queryParam:"style=form,explode=true,name=app_id"`
    EndingAt *string `queryParam:"style=form,explode=true,name=ending_at"`
    Length *string `queryParam:"style=form,explode=true,name=length"`
    
}

type KpIsForDailyAppUninstallsByDateRequest struct {
    QueryParams KpIsForDailyAppUninstallsByDateQueryParams 
    
}

type KpIsForDailyAppUninstallsByDateResponse struct {
    ContentType string 
    StatusCode int64 
    
}


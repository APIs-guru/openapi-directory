package operations



type GetAdminBackupsFilenamePathParams struct {
    Filename string `pathParam:"style=simple,explode=false,name=filename"`
    
}

type GetAdminBackupsFilenameQueryParams struct {
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type GetAdminBackupsFilenameRequest struct {
    PathParams GetAdminBackupsFilenamePathParams 
    QueryParams GetAdminBackupsFilenameQueryParams 
    
}

type GetAdminBackupsFilenameResponse struct {
    ContentType string 
    StatusCode int64 
    
}


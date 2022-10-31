package operations



type PutAdminBackupsFilenamePathParams struct {
    Filename string `pathParam:"style=simple,explode=false,name=filename"`
    
}

type PutAdminBackupsFilenameRequest struct {
    PathParams PutAdminBackupsFilenamePathParams 
    
}

type PutAdminBackupsFilenameResponse struct {
    ContentType string 
    StatusCode int64 
    
}


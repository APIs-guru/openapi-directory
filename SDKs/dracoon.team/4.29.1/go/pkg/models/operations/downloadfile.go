package operations



type DownloadFilePathParams struct {
    FileID int64 `pathParam:"style=simple,explode=false,name=file_id"`
    
}

type DownloadFileQueryParams struct {
    GenericMimetype *bool `queryParam:"style=form,explode=true,name=generic_mimetype"`
    Inline *bool `queryParam:"style=form,explode=true,name=inline"`
    
}

type DownloadFileHeaders struct {
    Range *string `header:"style=simple,explode=false,name=Range"`
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type DownloadFileRequest struct {
    PathParams DownloadFilePathParams 
    QueryParams DownloadFileQueryParams 
    Headers DownloadFileHeaders 
    
}

type DownloadFileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


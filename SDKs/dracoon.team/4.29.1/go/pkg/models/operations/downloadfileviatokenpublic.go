package operations



type DownloadFileViaTokenPublicPathParams struct {
    AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type DownloadFileViaTokenPublicQueryParams struct {
    GenericMimetype *bool `queryParam:"style=form,explode=true,name=generic_mimetype"`
    Inline *bool `queryParam:"style=form,explode=true,name=inline"`
    
}

type DownloadFileViaTokenPublicHeaders struct {
    Range *string `header:"style=simple,explode=false,name=Range"`
    
}

type DownloadFileViaTokenPublicRequest struct {
    PathParams DownloadFileViaTokenPublicPathParams 
    QueryParams DownloadFileViaTokenPublicQueryParams 
    Headers DownloadFileViaTokenPublicHeaders 
    
}

type DownloadFileViaTokenPublicResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


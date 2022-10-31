package operations



type DownloadFileViaTokenPublic1PathParams struct {
    AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type DownloadFileViaTokenPublic1QueryParams struct {
    GenericMimetype *bool `queryParam:"style=form,explode=true,name=generic_mimetype"`
    Inline *bool `queryParam:"style=form,explode=true,name=inline"`
    
}

type DownloadFileViaTokenPublic1Headers struct {
    Range *string `header:"style=simple,explode=false,name=Range"`
    
}

type DownloadFileViaTokenPublic1Request struct {
    PathParams DownloadFileViaTokenPublic1PathParams 
    QueryParams DownloadFileViaTokenPublic1QueryParams 
    Headers DownloadFileViaTokenPublic1Headers 
    
}

type DownloadFileViaTokenPublic1Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


package operations



type PostVolumesCreateQueryParams struct {
    FsName *string `queryParam:"style=form,explode=true,name=fsName"`
    Name string `queryParam:"style=form,explode=true,name=name"`
    
}

type PostVolumesCreateHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type PostVolumesCreateRequest struct {
    QueryParams PostVolumesCreateQueryParams 
    Headers PostVolumesCreateHeaders 
    
}

type PostVolumesCreateResponse struct {
    ContentType string 
    StatusCode int64 
    Volume *interface{} 
    
}


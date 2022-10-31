package operations



type GetVideoChannelsQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    
}

type GetVideoChannelsRequest struct {
    QueryParams GetVideoChannelsQueryParams 
    
}

type GetVideoChannelsResponse struct {
    ContentType string 
    StatusCode int64 
    VideoChannelList *interface{} 
    
}


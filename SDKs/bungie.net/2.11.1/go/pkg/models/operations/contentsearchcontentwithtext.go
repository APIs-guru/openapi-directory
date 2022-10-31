package operations



type ContentSearchContentWithTextPathParams struct {
    Locale string `pathParam:"style=simple,explode=false,name=locale"`
    
}

type ContentSearchContentWithTextQueryParams struct {
    Ctype *string `queryParam:"style=form,explode=true,name=ctype"`
    Currentpage *int32 `queryParam:"style=form,explode=true,name=currentpage"`
    Head *bool `queryParam:"style=form,explode=true,name=head"`
    Searchtext *string `queryParam:"style=form,explode=true,name=searchtext"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    Tag *string `queryParam:"style=form,explode=true,name=tag"`
    
}

type ContentSearchContentWithTextRequest struct {
    PathParams ContentSearchContentWithTextPathParams 
    QueryParams ContentSearchContentWithTextQueryParams 
    
}

type ContentSearchContentWithTextResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


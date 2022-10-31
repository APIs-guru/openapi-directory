package operations



type ContentGetContentByIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    Locale string `pathParam:"style=simple,explode=false,name=locale"`
    
}

type ContentGetContentByIDQueryParams struct {
    Head *bool `queryParam:"style=form,explode=true,name=head"`
    
}

type ContentGetContentByIDRequest struct {
    PathParams ContentGetContentByIDPathParams 
    QueryParams ContentGetContentByIDQueryParams 
    
}

type ContentGetContentByIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


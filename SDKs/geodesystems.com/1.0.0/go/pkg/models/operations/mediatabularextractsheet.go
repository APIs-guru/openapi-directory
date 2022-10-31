package operations



type MediaTabularExtractsheetQueryParams struct {
    Arg1 *string `queryParam:"style=form,explode=true,name=arg1"`
    Entryid string `queryParam:"style=form,explode=true,name=entryid"`
    Output string `queryParam:"style=form,explode=true,name=output"`
    
}

type MediaTabularExtractsheetRequest struct {
    QueryParams MediaTabularExtractsheetQueryParams 
    
}

type MediaTabularExtractsheetResponse struct {
    ContentType string 
    StatusCode int64 
    
}


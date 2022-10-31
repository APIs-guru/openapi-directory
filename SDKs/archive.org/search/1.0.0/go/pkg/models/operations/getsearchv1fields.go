package operations



type GetSearchV1FieldsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    
}

type GetSearchV1FieldsRequest struct {
    QueryParams GetSearchV1FieldsQueryParams 
    
}

type GetSearchV1FieldsResponse struct {
    Body []byte 
    ContentType string 
    Fields []string 
    StatusCode int64 
    
}


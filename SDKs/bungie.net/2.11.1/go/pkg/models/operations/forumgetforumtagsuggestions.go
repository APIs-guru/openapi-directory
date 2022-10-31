package operations



type ForumGetForumTagSuggestionsQueryParams struct {
    Partialtag *string `queryParam:"style=form,explode=true,name=partialtag"`
    
}

type ForumGetForumTagSuggestionsRequest struct {
    QueryParams ForumGetForumTagSuggestionsQueryParams 
    
}

type ForumGetForumTagSuggestionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


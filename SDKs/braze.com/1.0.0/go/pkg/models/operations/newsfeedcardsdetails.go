package operations



type NewsFeedCardsDetailsQueryParams struct {
    CardID *string `queryParam:"style=form,explode=true,name=card_id"`
    
}

type NewsFeedCardsDetailsRequest struct {
    QueryParams NewsFeedCardsDetailsQueryParams 
    
}

type NewsFeedCardsDetailsResponse struct {
    ContentType string 
    StatusCode int64 
    
}


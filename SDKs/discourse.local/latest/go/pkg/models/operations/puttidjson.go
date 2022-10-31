package operations



type PutTIDJSONPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutTIDJSONHeaders struct {
    APIKey string `header:"style=simple,explode=false,name=Api-Key"`
    APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
    
}

type PutTIDJSONRequestBodyTopic struct {
    CategoryID *int64 `json:"category_id,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type PutTIDJSONRequestBody struct {
    Topic *PutTIDJSONRequestBodyTopic `json:"topic,omitempty"`
    
}

type PutTIDJSONRequest struct {
    PathParams PutTIDJSONPathParams 
    Headers PutTIDJSONHeaders 
    Request *PutTIDJSONRequestBody `request:"mediaType=application/json"`
    
}

type PutTIDJSON200ApplicationJSONBasicTopic struct {
    FancyTitle *string `json:"fancy_title,omitempty"`
    ID *int64 `json:"id,omitempty"`
    PostsCount *int64 `json:"posts_count,omitempty"`
    Slug *string `json:"slug,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type PutTIDJSON200ApplicationJSON struct {
    BasicTopic *PutTIDJSON200ApplicationJSONBasicTopic `json:"basic_topic,omitempty"`
    
}

type PutTIDJSONResponse struct {
    ContentType string 
    PutTIDJSON200ApplicationJSONObject *PutTIDJSON200ApplicationJSON 
    StatusCode int64 
    
}


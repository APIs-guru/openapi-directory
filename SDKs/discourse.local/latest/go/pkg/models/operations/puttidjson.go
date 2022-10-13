package operations

type PutTIDJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutTIDJSONHeaders struct {
	APIKey      string `header:"name=Api-Key"`
	APIUsername string `header:"name=Api-Username"`
}

type PutTIDJSONRequestBodyTopic struct {
	CategoryID *int64  `json:"category_id"`
	Title      *string `json:"title"`
}

type PutTIDJSONRequestBody struct {
	Topic *PutTIDJSONRequestBodyTopic `json:"topic"`
}

type PutTIDJSONRequest struct {
	PathParams PutTIDJSONPathParams
	Headers    PutTIDJSONHeaders
	Request    *PutTIDJSONRequestBody `request:"mediaType=application/json"`
}

type PutTIDJSON200ApplicationJSONBasicTopic struct {
	FancyTitle *string `json:"fancy_title"`
	ID         *int64  `json:"id"`
	PostsCount *int64  `json:"posts_count"`
	Slug       *string `json:"slug"`
	Title      *string `json:"title"`
}

type PutTIDJSON200ApplicationJSON struct {
	BasicTopic *PutTIDJSON200ApplicationJSONBasicTopic `json:"basic_topic"`
}

type PutTIDJSONResponse struct {
	ContentType                        string
	PutTIDJSON200ApplicationJSONObject *PutTIDJSON200ApplicationJSON
	StatusCode                         int64
}

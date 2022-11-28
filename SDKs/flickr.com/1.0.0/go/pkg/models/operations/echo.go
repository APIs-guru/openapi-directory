package operations

type EchoQueryParams struct {
	APIKey string  `queryParam:"style=form,explode=true,name=api_key"`
	Echo   *string `queryParam:"style=form,explode=true,name=echo"`
}

type Echo200ApplicationJSONEcho struct {
	Content *string `json:"_content,omitempty"`
}

type Echo200ApplicationJSON struct {
	Echo *Echo200ApplicationJSONEcho `json:"echo,omitempty"`
}

type EchoRequest struct {
	QueryParams EchoQueryParams
}

type EchoResponse struct {
	ContentType                  string
	StatusCode                   int64
	Echo200ApplicationJSONObject *Echo200ApplicationJSON
}

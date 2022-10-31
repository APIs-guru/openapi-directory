package operations

type GetKeyQueryParams struct {
	Token *string `queryParam:"style=form,explode=true,name=token"`
}

type GetKeyRequest struct {
	QueryParams GetKeyQueryParams
}

type GetKeyResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}

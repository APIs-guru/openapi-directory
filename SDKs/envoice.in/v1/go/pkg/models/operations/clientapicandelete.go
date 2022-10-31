package operations

type ClientAPICanDeleteQueryParams struct {
	ID int32 `queryParam:"style=form,explode=true,name=id"`
}

type ClientAPICanDeleteHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type ClientAPICanDeleteRequest struct {
	QueryParams ClientAPICanDeleteQueryParams
	Headers     ClientAPICanDeleteHeaders
}

type ClientAPICanDeleteResponse struct {
	Body                                        []byte
	ClientAPICanDelete200ApplicationJSONBoolean *bool
	ClientAPICanDelete200TextJSONBoolean        *bool
	ContentType                                 string
	StatusCode                                  int64
}

package operations

type PutCategoriesIDJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutCategoriesIDJSONRequest struct {
	PathParams PutCategoriesIDJSONPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PutCategoriesIDJSONResponse struct {
	ContentType                              string
	PutCategoriesIDJSON200ApplicationJSONAny *interface{}
	StatusCode                               int64
}

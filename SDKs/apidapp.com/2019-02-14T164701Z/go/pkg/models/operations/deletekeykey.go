package operations

type DeleteKeyKeyPathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type DeleteKeyKeyRequest struct {
	PathParams DeleteKeyKeyPathParams
}

type DeleteKeyKeyResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}

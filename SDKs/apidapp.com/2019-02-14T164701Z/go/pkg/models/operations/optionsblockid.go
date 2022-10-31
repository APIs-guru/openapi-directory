package operations

type OptionsBlockIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OptionsBlockIDRequest struct {
	PathParams OptionsBlockIDPathParams
}

type OptionsBlockIDResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}

package operations

type OptionsAccountIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OptionsAccountIDRequest struct {
	PathParams OptionsAccountIDPathParams
}

type OptionsAccountIDResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}

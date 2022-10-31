package operations

type DeleteFormFieldSetsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteFormFieldSetsIDRequest struct {
	PathParams DeleteFormFieldSetsIDPathParams
}

type DeleteFormFieldSetsIDResponse struct {
	ContentType string
	StatusCode  int64
}

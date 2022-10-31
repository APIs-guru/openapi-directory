package operations

type ContentGetContentByTagAndTypePathParams struct {
	Locale string `pathParam:"style=simple,explode=false,name=locale"`
	Tag    string `pathParam:"style=simple,explode=false,name=tag"`
	Type   string `pathParam:"style=simple,explode=false,name=type"`
}

type ContentGetContentByTagAndTypeQueryParams struct {
	Head *bool `queryParam:"style=form,explode=true,name=head"`
}

type ContentGetContentByTagAndTypeRequest struct {
	PathParams  ContentGetContentByTagAndTypePathParams
	QueryParams ContentGetContentByTagAndTypeQueryParams
}

type ContentGetContentByTagAndTypeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

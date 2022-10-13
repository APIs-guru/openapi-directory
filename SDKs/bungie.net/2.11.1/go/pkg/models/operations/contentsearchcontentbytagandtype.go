package operations

type ContentSearchContentByTagAndTypePathParams struct {
	Locale string `pathParam:"style=simple,explode=false,name=locale"`
	Tag    string `pathParam:"style=simple,explode=false,name=tag"`
	Type   string `pathParam:"style=simple,explode=false,name=type"`
}

type ContentSearchContentByTagAndTypeQueryParams struct {
	Currentpage  *int32 `queryParam:"style=form,explode=true,name=currentpage"`
	Head         *bool  `queryParam:"style=form,explode=true,name=head"`
	Itemsperpage *int32 `queryParam:"style=form,explode=true,name=itemsperpage"`
}

type ContentSearchContentByTagAndTypeRequest struct {
	PathParams  ContentSearchContentByTagAndTypePathParams
	QueryParams ContentSearchContentByTagAndTypeQueryParams
}

type ContentSearchContentByTagAndTypeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

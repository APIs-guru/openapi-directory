package operations

type MetaGetOctocatQueryParams struct {
	S *string `queryParam:"style=form,explode=true,name=s"`
}

type MetaGetOctocatRequest struct {
	QueryParams MetaGetOctocatQueryParams
}

type MetaGetOctocatResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	MetaGetOctocat200ApplicationOctocatStreamString *string
}

package operations

type PostBuildQueryParams struct {
	Nocache *bool  `queryParam:"style=form,explode=true,name=nocache"`
	Pull    *bool  `queryParam:"style=form,explode=true,name=pull"`
	Q       *bool  `queryParam:"style=form,explode=true,name=q"`
	T       string `queryParam:"style=form,explode=true,name=t"`
}

type PostBuildHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type PostBuildRequest struct {
	QueryParams PostBuildQueryParams
	Headers     PostBuildHeaders
	Request     []byte `request:"mediaType=application/tar"`
}

type PostBuildResponse struct {
	ContentType string
	StatusCode  int64
}

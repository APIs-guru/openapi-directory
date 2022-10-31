package operations

type GetCheckForUpdateQueryParams struct {
	IsTestflight *int64 `queryParam:"style=form,explode=true,name=is_testflight"`
}

type GetCheckForUpdateRequest struct {
	QueryParams GetCheckForUpdateQueryParams
}

type GetCheckForUpdateResponse struct {
	ContentType string
	StatusCode  int64
}

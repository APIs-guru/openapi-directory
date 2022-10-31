package operations

type DailyActiveUsersByDateQueryParams struct {
	AppID    *string `queryParam:"style=form,explode=true,name=app_id"`
	EndingAt *string `queryParam:"style=form,explode=true,name=ending_at"`
	Length   *string `queryParam:"style=form,explode=true,name=length"`
}

type DailyActiveUsersByDateRequest struct {
	QueryParams DailyActiveUsersByDateQueryParams
}

type DailyActiveUsersByDateResponse struct {
	ContentType string
	StatusCode  int64
}

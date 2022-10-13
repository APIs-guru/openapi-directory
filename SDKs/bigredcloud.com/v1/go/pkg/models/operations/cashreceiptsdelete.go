package operations

type CashReceiptsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CashReceiptsDeleteQueryParams struct {
	Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
}

type CashReceiptsDeleteRequest struct {
	PathParams  CashReceiptsDeletePathParams
	QueryParams CashReceiptsDeleteQueryParams
}

type CashReceiptsDeleteResponse struct {
	CashReceiptsDelete200ApplicationJSONObject map[string]interface{}
	ContentType                                string
	StatusCode                                 int64
}

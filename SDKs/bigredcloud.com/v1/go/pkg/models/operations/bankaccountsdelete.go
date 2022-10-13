package operations

type BankAccountsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type BankAccountsDeleteQueryParams struct {
	Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
}

type BankAccountsDeleteRequest struct {
	PathParams  BankAccountsDeletePathParams
	QueryParams BankAccountsDeleteQueryParams
}

type BankAccountsDeleteResponse struct {
	BankAccountsDelete200ApplicationJSONObject map[string]interface{}
	ContentType                                string
	StatusCode                                 int64
}

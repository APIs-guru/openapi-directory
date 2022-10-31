package operations

type GetAccountsNameVideoChannelsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetAccountsNameVideoChannelsQueryParams struct {
	Count     *int64  `queryParam:"style=form,explode=true,name=count"`
	Sort      *string `queryParam:"style=form,explode=true,name=sort"`
	Start     *int64  `queryParam:"style=form,explode=true,name=start"`
	WithStats *bool   `queryParam:"style=form,explode=true,name=withStats"`
}

type GetAccountsNameVideoChannelsRequest struct {
	PathParams  GetAccountsNameVideoChannelsPathParams
	QueryParams GetAccountsNameVideoChannelsQueryParams
}

type GetAccountsNameVideoChannelsResponse struct {
	ContentType      string
	StatusCode       int64
	VideoChannelList *interface{}
}

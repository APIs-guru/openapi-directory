package operations

type DownloadFileViaTokenPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type DownloadFileViaTokenQueryParams struct {
	GenericMimetype *bool `queryParam:"style=form,explode=true,name=generic_mimetype"`
	Inline          *bool `queryParam:"style=form,explode=true,name=inline"`
}

type DownloadFileViaTokenHeaders struct {
	Range *string `header:"style=simple,explode=false,name=Range"`
}

type DownloadFileViaTokenRequest struct {
	PathParams  DownloadFileViaTokenPathParams
	QueryParams DownloadFileViaTokenQueryParams
	Headers     DownloadFileViaTokenHeaders
}

type DownloadFileViaTokenResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

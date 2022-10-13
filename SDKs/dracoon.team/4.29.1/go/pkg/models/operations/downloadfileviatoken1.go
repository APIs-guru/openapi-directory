package operations

type DownloadFileViaToken1PathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type DownloadFileViaToken1QueryParams struct {
	GenericMimetype *bool `queryParam:"style=form,explode=true,name=generic_mimetype"`
	Inline          *bool `queryParam:"style=form,explode=true,name=inline"`
}

type DownloadFileViaToken1Headers struct {
	Range *string `header:"name=Range"`
}

type DownloadFileViaToken1Request struct {
	PathParams  DownloadFileViaToken1PathParams
	QueryParams DownloadFileViaToken1QueryParams
	Headers     DownloadFileViaToken1Headers
}

type DownloadFileViaToken1Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

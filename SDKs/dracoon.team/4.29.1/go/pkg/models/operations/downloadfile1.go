package operations

type DownloadFile1PathParams struct {
	FileID int64 `pathParam:"style=simple,explode=false,name=file_id"`
}

type DownloadFile1QueryParams struct {
	GenericMimetype *bool `queryParam:"style=form,explode=true,name=generic_mimetype"`
	Inline          *bool `queryParam:"style=form,explode=true,name=inline"`
}

type DownloadFile1Headers struct {
	Range         *string `header:"style=simple,explode=false,name=Range"`
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type DownloadFile1Request struct {
	PathParams  DownloadFile1PathParams
	QueryParams DownloadFile1QueryParams
	Headers     DownloadFile1Headers
}

type DownloadFile1Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

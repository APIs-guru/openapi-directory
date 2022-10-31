package operations

type DownloadZipArchiveViaTokenPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type DownloadZipArchiveViaTokenRequest struct {
	PathParams DownloadZipArchiveViaTokenPathParams
}

type DownloadZipArchiveViaTokenResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

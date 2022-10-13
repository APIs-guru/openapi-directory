package operations

type GetLookupSha1Sha1PathParams struct {
	Sha1 string `pathParam:"style=simple,explode=false,name=sha1"`
}

type GetLookupSha1Sha1Request struct {
	PathParams GetLookupSha1Sha1PathParams
}

type GetLookupSha1Sha1Response struct {
	ContentType string
	StatusCode  int64
}

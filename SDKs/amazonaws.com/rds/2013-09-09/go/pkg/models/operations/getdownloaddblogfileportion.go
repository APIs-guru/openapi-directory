package operations

type GetDownloadDbLogFilePortionActionEnum string

const (
	GetDownloadDbLogFilePortionActionEnumDownloadDbLogFilePortion GetDownloadDbLogFilePortionActionEnum = "DownloadDBLogFilePortion"
)

type GetDownloadDbLogFilePortionVersionEnum string

const (
	GetDownloadDbLogFilePortionVersionEnumTwoThousandAndThirteen0909 GetDownloadDbLogFilePortionVersionEnum = "2013-09-09"
)

type GetDownloadDbLogFilePortionQueryParams struct {
	Action               GetDownloadDbLogFilePortionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceIdentifier string                                 `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	LogFileName          string                                 `queryParam:"style=form,explode=true,name=LogFileName"`
	Marker               *string                                `queryParam:"style=form,explode=true,name=Marker"`
	NumberOfLines        *int64                                 `queryParam:"style=form,explode=true,name=NumberOfLines"`
	Version              GetDownloadDbLogFilePortionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDownloadDbLogFilePortionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDownloadDbLogFilePortionRequest struct {
	QueryParams GetDownloadDbLogFilePortionQueryParams
	Headers     GetDownloadDbLogFilePortionHeaders
}

type GetDownloadDbLogFilePortionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

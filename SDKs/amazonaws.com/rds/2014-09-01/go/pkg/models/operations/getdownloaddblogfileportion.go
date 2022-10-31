package operations

type GetDownloadDbLogFilePortionActionEnum string

const (
	GetDownloadDbLogFilePortionActionEnumDownloadDbLogFilePortion GetDownloadDbLogFilePortionActionEnum = "DownloadDBLogFilePortion"
)

type GetDownloadDbLogFilePortionVersionEnum string

const (
	GetDownloadDbLogFilePortionVersionEnumTwoThousandAndFourteen0901 GetDownloadDbLogFilePortionVersionEnum = "2014-09-01"
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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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

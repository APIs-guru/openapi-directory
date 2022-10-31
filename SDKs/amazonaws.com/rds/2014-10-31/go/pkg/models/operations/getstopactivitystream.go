package operations

type GetStopActivityStreamActionEnum string

const (
	GetStopActivityStreamActionEnumStopActivityStream GetStopActivityStreamActionEnum = "StopActivityStream"
)

type GetStopActivityStreamVersionEnum string

const (
	GetStopActivityStreamVersionEnumTwoThousandAndFourteen1031 GetStopActivityStreamVersionEnum = "2014-10-31"
)

type GetStopActivityStreamQueryParams struct {
	Action           GetStopActivityStreamActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ApplyImmediately *bool                            `queryParam:"style=form,explode=true,name=ApplyImmediately"`
	ResourceArn      string                           `queryParam:"style=form,explode=true,name=ResourceArn"`
	Version          GetStopActivityStreamVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStopActivityStreamHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetStopActivityStreamRequest struct {
	QueryParams GetStopActivityStreamQueryParams
	Headers     GetStopActivityStreamHeaders
}

type GetStopActivityStreamResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

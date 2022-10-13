package operations

type PostDeleteAlarmsActionEnum string

const (
	PostDeleteAlarmsActionEnumDeleteAlarms PostDeleteAlarmsActionEnum = "DeleteAlarms"
)

type PostDeleteAlarmsVersionEnum string

const (
	PostDeleteAlarmsVersionEnumTwoThousandAndTen0801 PostDeleteAlarmsVersionEnum = "2010-08-01"
)

type PostDeleteAlarmsQueryParams struct {
	Action  PostDeleteAlarmsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteAlarmsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteAlarmsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteAlarmsRequest struct {
	QueryParams PostDeleteAlarmsQueryParams
	Headers     PostDeleteAlarmsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteAlarmsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

package operations

type PostPutCompositeAlarmActionEnum string

const (
	PostPutCompositeAlarmActionEnumPutCompositeAlarm PostPutCompositeAlarmActionEnum = "PutCompositeAlarm"
)

type PostPutCompositeAlarmVersionEnum string

const (
	PostPutCompositeAlarmVersionEnumTwoThousandAndTen0801 PostPutCompositeAlarmVersionEnum = "2010-08-01"
)

type PostPutCompositeAlarmQueryParams struct {
	Action  PostPutCompositeAlarmActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutCompositeAlarmVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutCompositeAlarmHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPutCompositeAlarmRequest struct {
	QueryParams PostPutCompositeAlarmQueryParams
	Headers     PostPutCompositeAlarmHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutCompositeAlarmResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

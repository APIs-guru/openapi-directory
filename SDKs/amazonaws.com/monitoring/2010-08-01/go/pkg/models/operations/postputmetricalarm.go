package operations

type PostPutMetricAlarmActionEnum string

const (
	PostPutMetricAlarmActionEnumPutMetricAlarm PostPutMetricAlarmActionEnum = "PutMetricAlarm"
)

type PostPutMetricAlarmVersionEnum string

const (
	PostPutMetricAlarmVersionEnumTwoThousandAndTen0801 PostPutMetricAlarmVersionEnum = "2010-08-01"
)

type PostPutMetricAlarmQueryParams struct {
	Action  PostPutMetricAlarmActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutMetricAlarmVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutMetricAlarmHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPutMetricAlarmRequest struct {
	QueryParams PostPutMetricAlarmQueryParams
	Headers     PostPutMetricAlarmHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutMetricAlarmResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

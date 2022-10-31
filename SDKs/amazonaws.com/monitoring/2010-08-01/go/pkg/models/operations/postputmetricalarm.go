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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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

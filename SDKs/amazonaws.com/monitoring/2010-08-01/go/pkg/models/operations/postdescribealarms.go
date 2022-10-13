package operations

type PostDescribeAlarmsActionEnum string

const (
	PostDescribeAlarmsActionEnumDescribeAlarms PostDescribeAlarmsActionEnum = "DescribeAlarms"
)

type PostDescribeAlarmsVersionEnum string

const (
	PostDescribeAlarmsVersionEnumTwoThousandAndTen0801 PostDescribeAlarmsVersionEnum = "2010-08-01"
)

type PostDescribeAlarmsQueryParams struct {
	Action     PostDescribeAlarmsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxRecords *string                       `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken  *string                       `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeAlarmsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAlarmsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAlarmsRequest struct {
	QueryParams PostDescribeAlarmsQueryParams
	Headers     PostDescribeAlarmsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAlarmsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

package operations

type GetDescribeOptionGroupOptionsActionEnum string

const (
	GetDescribeOptionGroupOptionsActionEnumDescribeOptionGroupOptions GetDescribeOptionGroupOptionsActionEnum = "DescribeOptionGroupOptions"
)

type GetDescribeOptionGroupOptionsVersionEnum string

const (
	GetDescribeOptionGroupOptionsVersionEnumTwoThousandAndThirteen0212 GetDescribeOptionGroupOptionsVersionEnum = "2013-02-12"
)

type GetDescribeOptionGroupOptionsQueryParams struct {
	Action             GetDescribeOptionGroupOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EngineName         string                                   `queryParam:"style=form,explode=true,name=EngineName"`
	MajorEngineVersion *string                                  `queryParam:"style=form,explode=true,name=MajorEngineVersion"`
	Marker             *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords         *int64                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version            GetDescribeOptionGroupOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeOptionGroupOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeOptionGroupOptionsRequest struct {
	QueryParams GetDescribeOptionGroupOptionsQueryParams
	Headers     GetDescribeOptionGroupOptionsHeaders
}

type GetDescribeOptionGroupOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

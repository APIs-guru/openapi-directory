package operations

type PostPutDashboardActionEnum string

const (
	PostPutDashboardActionEnumPutDashboard PostPutDashboardActionEnum = "PutDashboard"
)

type PostPutDashboardVersionEnum string

const (
	PostPutDashboardVersionEnumTwoThousandAndTen0801 PostPutDashboardVersionEnum = "2010-08-01"
)

type PostPutDashboardQueryParams struct {
	Action  PostPutDashboardActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutDashboardVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutDashboardHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostPutDashboardRequest struct {
	QueryParams PostPutDashboardQueryParams
	Headers     PostPutDashboardHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutDashboardResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

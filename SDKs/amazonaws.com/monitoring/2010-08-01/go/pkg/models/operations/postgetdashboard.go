package operations

type PostGetDashboardActionEnum string

const (
	PostGetDashboardActionEnumGetDashboard PostGetDashboardActionEnum = "GetDashboard"
)

type PostGetDashboardVersionEnum string

const (
	PostGetDashboardVersionEnumTwoThousandAndTen0801 PostGetDashboardVersionEnum = "2010-08-01"
)

type PostGetDashboardQueryParams struct {
	Action  PostGetDashboardActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetDashboardVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetDashboardHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetDashboardRequest struct {
	QueryParams PostGetDashboardQueryParams
	Headers     PostGetDashboardHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetDashboardResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

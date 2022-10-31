package operations

type GetGetDashboardActionEnum string

const (
	GetGetDashboardActionEnumGetDashboard GetGetDashboardActionEnum = "GetDashboard"
)

type GetGetDashboardVersionEnum string

const (
	GetGetDashboardVersionEnumTwoThousandAndTen0801 GetGetDashboardVersionEnum = "2010-08-01"
)

type GetGetDashboardQueryParams struct {
	Action        GetGetDashboardActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DashboardName string                     `queryParam:"style=form,explode=true,name=DashboardName"`
	Version       GetGetDashboardVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetDashboardHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetDashboardRequest struct {
	QueryParams GetGetDashboardQueryParams
	Headers     GetGetDashboardHeaders
}

type GetGetDashboardResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

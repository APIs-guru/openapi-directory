package operations

type GetDeleteDashboardsActionEnum string

const (
	GetDeleteDashboardsActionEnumDeleteDashboards GetDeleteDashboardsActionEnum = "DeleteDashboards"
)

type GetDeleteDashboardsVersionEnum string

const (
	GetDeleteDashboardsVersionEnumTwoThousandAndTen0801 GetDeleteDashboardsVersionEnum = "2010-08-01"
)

type GetDeleteDashboardsQueryParams struct {
	Action         GetDeleteDashboardsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DashboardNames []string                       `queryParam:"style=form,explode=true,name=DashboardNames"`
	Version        GetDeleteDashboardsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDashboardsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteDashboardsRequest struct {
	QueryParams GetDeleteDashboardsQueryParams
	Headers     GetDeleteDashboardsHeaders
}

type GetDeleteDashboardsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

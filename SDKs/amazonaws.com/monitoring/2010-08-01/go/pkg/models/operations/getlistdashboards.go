package operations

type GetListDashboardsActionEnum string

const (
	GetListDashboardsActionEnumListDashboards GetListDashboardsActionEnum = "ListDashboards"
)

type GetListDashboardsVersionEnum string

const (
	GetListDashboardsVersionEnumTwoThousandAndTen0801 GetListDashboardsVersionEnum = "2010-08-01"
)

type GetListDashboardsQueryParams struct {
	Action              GetListDashboardsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DashboardNamePrefix *string                      `queryParam:"style=form,explode=true,name=DashboardNamePrefix"`
	NextToken           *string                      `queryParam:"style=form,explode=true,name=NextToken"`
	Version             GetListDashboardsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListDashboardsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListDashboardsRequest struct {
	QueryParams GetListDashboardsQueryParams
	Headers     GetListDashboardsHeaders
}

type GetListDashboardsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

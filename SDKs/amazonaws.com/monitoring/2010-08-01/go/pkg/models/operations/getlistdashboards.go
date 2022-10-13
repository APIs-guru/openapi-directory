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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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

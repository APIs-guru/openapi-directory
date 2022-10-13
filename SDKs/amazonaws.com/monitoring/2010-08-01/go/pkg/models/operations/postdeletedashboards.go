package operations

type PostDeleteDashboardsActionEnum string

const (
	PostDeleteDashboardsActionEnumDeleteDashboards PostDeleteDashboardsActionEnum = "DeleteDashboards"
)

type PostDeleteDashboardsVersionEnum string

const (
	PostDeleteDashboardsVersionEnumTwoThousandAndTen0801 PostDeleteDashboardsVersionEnum = "2010-08-01"
)

type PostDeleteDashboardsQueryParams struct {
	Action  PostDeleteDashboardsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDashboardsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDashboardsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDashboardsRequest struct {
	QueryParams PostDeleteDashboardsQueryParams
	Headers     PostDeleteDashboardsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDashboardsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

package operations

type PostDeleteClusterParameterGroupActionEnum string

const (
	PostDeleteClusterParameterGroupActionEnumDeleteClusterParameterGroup PostDeleteClusterParameterGroupActionEnum = "DeleteClusterParameterGroup"
)

type PostDeleteClusterParameterGroupVersionEnum string

const (
	PostDeleteClusterParameterGroupVersionEnumTwoThousandAndTwelve1201 PostDeleteClusterParameterGroupVersionEnum = "2012-12-01"
)

type PostDeleteClusterParameterGroupQueryParams struct {
	Action  PostDeleteClusterParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteClusterParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteClusterParameterGroupRequest struct {
	QueryParams PostDeleteClusterParameterGroupQueryParams
	Headers     PostDeleteClusterParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteClusterParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

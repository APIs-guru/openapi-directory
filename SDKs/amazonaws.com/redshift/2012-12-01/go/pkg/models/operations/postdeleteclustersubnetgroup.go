package operations

type PostDeleteClusterSubnetGroupActionEnum string

const (
	PostDeleteClusterSubnetGroupActionEnumDeleteClusterSubnetGroup PostDeleteClusterSubnetGroupActionEnum = "DeleteClusterSubnetGroup"
)

type PostDeleteClusterSubnetGroupVersionEnum string

const (
	PostDeleteClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201 PostDeleteClusterSubnetGroupVersionEnum = "2012-12-01"
)

type PostDeleteClusterSubnetGroupQueryParams struct {
	Action  PostDeleteClusterSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteClusterSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteClusterSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteClusterSubnetGroupRequest struct {
	QueryParams PostDeleteClusterSubnetGroupQueryParams
	Headers     PostDeleteClusterSubnetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteClusterSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

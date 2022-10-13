package operations

type PostCreateClusterSubnetGroupActionEnum string

const (
	PostCreateClusterSubnetGroupActionEnumCreateClusterSubnetGroup PostCreateClusterSubnetGroupActionEnum = "CreateClusterSubnetGroup"
)

type PostCreateClusterSubnetGroupVersionEnum string

const (
	PostCreateClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201 PostCreateClusterSubnetGroupVersionEnum = "2012-12-01"
)

type PostCreateClusterSubnetGroupQueryParams struct {
	Action  PostCreateClusterSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateClusterSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateClusterSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateClusterSubnetGroupRequest struct {
	QueryParams PostCreateClusterSubnetGroupQueryParams
	Headers     PostCreateClusterSubnetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateClusterSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

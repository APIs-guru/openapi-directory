package operations

type PostDeleteClusterSecurityGroupActionEnum string

const (
	PostDeleteClusterSecurityGroupActionEnumDeleteClusterSecurityGroup PostDeleteClusterSecurityGroupActionEnum = "DeleteClusterSecurityGroup"
)

type PostDeleteClusterSecurityGroupVersionEnum string

const (
	PostDeleteClusterSecurityGroupVersionEnumTwoThousandAndTwelve1201 PostDeleteClusterSecurityGroupVersionEnum = "2012-12-01"
)

type PostDeleteClusterSecurityGroupQueryParams struct {
	Action  PostDeleteClusterSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteClusterSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteClusterSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteClusterSecurityGroupRequest struct {
	QueryParams PostDeleteClusterSecurityGroupQueryParams
	Headers     PostDeleteClusterSecurityGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteClusterSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

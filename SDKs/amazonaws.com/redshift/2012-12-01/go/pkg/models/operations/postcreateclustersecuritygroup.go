package operations

type PostCreateClusterSecurityGroupActionEnum string

const (
	PostCreateClusterSecurityGroupActionEnumCreateClusterSecurityGroup PostCreateClusterSecurityGroupActionEnum = "CreateClusterSecurityGroup"
)

type PostCreateClusterSecurityGroupVersionEnum string

const (
	PostCreateClusterSecurityGroupVersionEnumTwoThousandAndTwelve1201 PostCreateClusterSecurityGroupVersionEnum = "2012-12-01"
)

type PostCreateClusterSecurityGroupQueryParams struct {
	Action  PostCreateClusterSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateClusterSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateClusterSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateClusterSecurityGroupRequest struct {
	QueryParams PostCreateClusterSecurityGroupQueryParams
	Headers     PostCreateClusterSecurityGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateClusterSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

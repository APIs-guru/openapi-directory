package operations

type PostAuthorizeClusterSecurityGroupIngressActionEnum string

const (
	PostAuthorizeClusterSecurityGroupIngressActionEnumAuthorizeClusterSecurityGroupIngress PostAuthorizeClusterSecurityGroupIngressActionEnum = "AuthorizeClusterSecurityGroupIngress"
)

type PostAuthorizeClusterSecurityGroupIngressVersionEnum string

const (
	PostAuthorizeClusterSecurityGroupIngressVersionEnumTwoThousandAndTwelve1201 PostAuthorizeClusterSecurityGroupIngressVersionEnum = "2012-12-01"
)

type PostAuthorizeClusterSecurityGroupIngressQueryParams struct {
	Action  PostAuthorizeClusterSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAuthorizeClusterSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAuthorizeClusterSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAuthorizeClusterSecurityGroupIngressRequest struct {
	QueryParams PostAuthorizeClusterSecurityGroupIngressQueryParams
	Headers     PostAuthorizeClusterSecurityGroupIngressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAuthorizeClusterSecurityGroupIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

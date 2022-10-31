package operations

type PostAuthorizeDbSecurityGroupIngressActionEnum string

const (
	PostAuthorizeDbSecurityGroupIngressActionEnumAuthorizeDbSecurityGroupIngress PostAuthorizeDbSecurityGroupIngressActionEnum = "AuthorizeDBSecurityGroupIngress"
)

type PostAuthorizeDbSecurityGroupIngressVersionEnum string

const (
	PostAuthorizeDbSecurityGroupIngressVersionEnumTwoThousandAndThirteen0212 PostAuthorizeDbSecurityGroupIngressVersionEnum = "2013-02-12"
)

type PostAuthorizeDbSecurityGroupIngressQueryParams struct {
	Action  PostAuthorizeDbSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAuthorizeDbSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAuthorizeDbSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAuthorizeDbSecurityGroupIngressRequest struct {
	QueryParams PostAuthorizeDbSecurityGroupIngressQueryParams
	Headers     PostAuthorizeDbSecurityGroupIngressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAuthorizeDbSecurityGroupIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

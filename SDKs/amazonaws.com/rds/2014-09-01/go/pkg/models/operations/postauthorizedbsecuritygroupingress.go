package operations

type PostAuthorizeDbSecurityGroupIngressActionEnum string

const (
	PostAuthorizeDbSecurityGroupIngressActionEnumAuthorizeDbSecurityGroupIngress PostAuthorizeDbSecurityGroupIngressActionEnum = "AuthorizeDBSecurityGroupIngress"
)

type PostAuthorizeDbSecurityGroupIngressVersionEnum string

const (
	PostAuthorizeDbSecurityGroupIngressVersionEnumTwoThousandAndFourteen0901 PostAuthorizeDbSecurityGroupIngressVersionEnum = "2014-09-01"
)

type PostAuthorizeDbSecurityGroupIngressQueryParams struct {
	Action  PostAuthorizeDbSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAuthorizeDbSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAuthorizeDbSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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

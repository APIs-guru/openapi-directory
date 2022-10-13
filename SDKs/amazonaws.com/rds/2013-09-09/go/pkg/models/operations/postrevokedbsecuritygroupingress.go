package operations

type PostRevokeDbSecurityGroupIngressActionEnum string

const (
	PostRevokeDbSecurityGroupIngressActionEnumRevokeDbSecurityGroupIngress PostRevokeDbSecurityGroupIngressActionEnum = "RevokeDBSecurityGroupIngress"
)

type PostRevokeDbSecurityGroupIngressVersionEnum string

const (
	PostRevokeDbSecurityGroupIngressVersionEnumTwoThousandAndThirteen0909 PostRevokeDbSecurityGroupIngressVersionEnum = "2013-09-09"
)

type PostRevokeDbSecurityGroupIngressQueryParams struct {
	Action  PostRevokeDbSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRevokeDbSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRevokeDbSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRevokeDbSecurityGroupIngressRequest struct {
	QueryParams PostRevokeDbSecurityGroupIngressQueryParams
	Headers     PostRevokeDbSecurityGroupIngressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRevokeDbSecurityGroupIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

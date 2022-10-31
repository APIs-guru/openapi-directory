package operations

type PostRevokeDbSecurityGroupIngressActionEnum string

const (
	PostRevokeDbSecurityGroupIngressActionEnumRevokeDbSecurityGroupIngress PostRevokeDbSecurityGroupIngressActionEnum = "RevokeDBSecurityGroupIngress"
)

type PostRevokeDbSecurityGroupIngressVersionEnum string

const (
	PostRevokeDbSecurityGroupIngressVersionEnumTwoThousandAndFourteen1031 PostRevokeDbSecurityGroupIngressVersionEnum = "2014-10-31"
)

type PostRevokeDbSecurityGroupIngressQueryParams struct {
	Action  PostRevokeDbSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRevokeDbSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRevokeDbSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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

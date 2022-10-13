package operations

type PostRegisterDbProxyTargetsActionEnum string

const (
	PostRegisterDbProxyTargetsActionEnumRegisterDbProxyTargets PostRegisterDbProxyTargetsActionEnum = "RegisterDBProxyTargets"
)

type PostRegisterDbProxyTargetsVersionEnum string

const (
	PostRegisterDbProxyTargetsVersionEnumTwoThousandAndFourteen1031 PostRegisterDbProxyTargetsVersionEnum = "2014-10-31"
)

type PostRegisterDbProxyTargetsQueryParams struct {
	Action  PostRegisterDbProxyTargetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRegisterDbProxyTargetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRegisterDbProxyTargetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRegisterDbProxyTargetsRequest struct {
	QueryParams PostRegisterDbProxyTargetsQueryParams
	Headers     PostRegisterDbProxyTargetsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRegisterDbProxyTargetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

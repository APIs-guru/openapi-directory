package operations

type PostDeregisterDbProxyTargetsActionEnum string

const (
	PostDeregisterDbProxyTargetsActionEnumDeregisterDbProxyTargets PostDeregisterDbProxyTargetsActionEnum = "DeregisterDBProxyTargets"
)

type PostDeregisterDbProxyTargetsVersionEnum string

const (
	PostDeregisterDbProxyTargetsVersionEnumTwoThousandAndFourteen1031 PostDeregisterDbProxyTargetsVersionEnum = "2014-10-31"
)

type PostDeregisterDbProxyTargetsQueryParams struct {
	Action  PostDeregisterDbProxyTargetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeregisterDbProxyTargetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeregisterDbProxyTargetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeregisterDbProxyTargetsRequest struct {
	QueryParams PostDeregisterDbProxyTargetsQueryParams
	Headers     PostDeregisterDbProxyTargetsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeregisterDbProxyTargetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

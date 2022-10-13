package operations

type GetDeleteDbProxyActionEnum string

const (
	GetDeleteDbProxyActionEnumDeleteDbProxy GetDeleteDbProxyActionEnum = "DeleteDBProxy"
)

type GetDeleteDbProxyVersionEnum string

const (
	GetDeleteDbProxyVersionEnumTwoThousandAndFourteen1031 GetDeleteDbProxyVersionEnum = "2014-10-31"
)

type GetDeleteDbProxyQueryParams struct {
	Action      GetDeleteDbProxyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbProxyName string                      `queryParam:"style=form,explode=true,name=DBProxyName"`
	Version     GetDeleteDbProxyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbProxyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteDbProxyRequest struct {
	QueryParams GetDeleteDbProxyQueryParams
	Headers     GetDeleteDbProxyHeaders
}

type GetDeleteDbProxyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

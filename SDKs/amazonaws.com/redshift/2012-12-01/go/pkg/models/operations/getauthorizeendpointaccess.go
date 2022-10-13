package operations

type GetAuthorizeEndpointAccessActionEnum string

const (
	GetAuthorizeEndpointAccessActionEnumAuthorizeEndpointAccess GetAuthorizeEndpointAccessActionEnum = "AuthorizeEndpointAccess"
)

type GetAuthorizeEndpointAccessVersionEnum string

const (
	GetAuthorizeEndpointAccessVersionEnumTwoThousandAndTwelve1201 GetAuthorizeEndpointAccessVersionEnum = "2012-12-01"
)

type GetAuthorizeEndpointAccessQueryParams struct {
	Account           string                                `queryParam:"style=form,explode=true,name=Account"`
	Action            GetAuthorizeEndpointAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier *string                               `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Version           GetAuthorizeEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcIds            []string                              `queryParam:"style=form,explode=true,name=VpcIds"`
}

type GetAuthorizeEndpointAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAuthorizeEndpointAccessRequest struct {
	QueryParams GetAuthorizeEndpointAccessQueryParams
	Headers     GetAuthorizeEndpointAccessHeaders
}

type GetAuthorizeEndpointAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

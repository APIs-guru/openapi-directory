package operations

type GetRevokeEndpointAccessActionEnum string

const (
	GetRevokeEndpointAccessActionEnumRevokeEndpointAccess GetRevokeEndpointAccessActionEnum = "RevokeEndpointAccess"
)

type GetRevokeEndpointAccessVersionEnum string

const (
	GetRevokeEndpointAccessVersionEnumTwoThousandAndTwelve1201 GetRevokeEndpointAccessVersionEnum = "2012-12-01"
)

type GetRevokeEndpointAccessQueryParams struct {
	Account           *string                            `queryParam:"style=form,explode=true,name=Account"`
	Action            GetRevokeEndpointAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier *string                            `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Force             *bool                              `queryParam:"style=form,explode=true,name=Force"`
	Version           GetRevokeEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcIds            []string                           `queryParam:"style=form,explode=true,name=VpcIds"`
}

type GetRevokeEndpointAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRevokeEndpointAccessRequest struct {
	QueryParams GetRevokeEndpointAccessQueryParams
	Headers     GetRevokeEndpointAccessHeaders
}

type GetRevokeEndpointAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

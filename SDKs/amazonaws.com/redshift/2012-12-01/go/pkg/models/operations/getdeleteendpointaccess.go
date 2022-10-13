package operations

type GetDeleteEndpointAccessActionEnum string

const (
	GetDeleteEndpointAccessActionEnumDeleteEndpointAccess GetDeleteEndpointAccessActionEnum = "DeleteEndpointAccess"
)

type GetDeleteEndpointAccessVersionEnum string

const (
	GetDeleteEndpointAccessVersionEnumTwoThousandAndTwelve1201 GetDeleteEndpointAccessVersionEnum = "2012-12-01"
)

type GetDeleteEndpointAccessQueryParams struct {
	Action       GetDeleteEndpointAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EndpointName string                             `queryParam:"style=form,explode=true,name=EndpointName"`
	Version      GetDeleteEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteEndpointAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteEndpointAccessRequest struct {
	QueryParams GetDeleteEndpointAccessQueryParams
	Headers     GetDeleteEndpointAccessHeaders
}

type GetDeleteEndpointAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

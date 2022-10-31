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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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

package operations

type PostAcceptReservedNodeExchangeActionEnum string

const (
	PostAcceptReservedNodeExchangeActionEnumAcceptReservedNodeExchange PostAcceptReservedNodeExchangeActionEnum = "AcceptReservedNodeExchange"
)

type PostAcceptReservedNodeExchangeVersionEnum string

const (
	PostAcceptReservedNodeExchangeVersionEnumTwoThousandAndTwelve1201 PostAcceptReservedNodeExchangeVersionEnum = "2012-12-01"
)

type PostAcceptReservedNodeExchangeQueryParams struct {
	Action  PostAcceptReservedNodeExchangeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAcceptReservedNodeExchangeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAcceptReservedNodeExchangeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAcceptReservedNodeExchangeRequest struct {
	QueryParams PostAcceptReservedNodeExchangeQueryParams
	Headers     PostAcceptReservedNodeExchangeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAcceptReservedNodeExchangeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

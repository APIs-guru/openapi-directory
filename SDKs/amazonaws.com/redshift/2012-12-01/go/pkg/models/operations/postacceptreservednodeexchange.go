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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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

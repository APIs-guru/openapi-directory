package operations

type GetAcceptReservedNodeExchangeActionEnum string

const (
	GetAcceptReservedNodeExchangeActionEnumAcceptReservedNodeExchange GetAcceptReservedNodeExchangeActionEnum = "AcceptReservedNodeExchange"
)

type GetAcceptReservedNodeExchangeVersionEnum string

const (
	GetAcceptReservedNodeExchangeVersionEnumTwoThousandAndTwelve1201 GetAcceptReservedNodeExchangeVersionEnum = "2012-12-01"
)

type GetAcceptReservedNodeExchangeQueryParams struct {
	Action                       GetAcceptReservedNodeExchangeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ReservedNodeID               string                                   `queryParam:"style=form,explode=true,name=ReservedNodeId"`
	TargetReservedNodeOfferingID string                                   `queryParam:"style=form,explode=true,name=TargetReservedNodeOfferingId"`
	Version                      GetAcceptReservedNodeExchangeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAcceptReservedNodeExchangeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAcceptReservedNodeExchangeRequest struct {
	QueryParams GetAcceptReservedNodeExchangeQueryParams
	Headers     GetAcceptReservedNodeExchangeHeaders
}

type GetAcceptReservedNodeExchangeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

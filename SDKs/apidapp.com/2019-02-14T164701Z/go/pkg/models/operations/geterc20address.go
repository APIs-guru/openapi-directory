package operations

type GetErc20AddressPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type GetErc20AddressRequest struct {
	PathParams GetErc20AddressPathParams
}

type GetErc20AddressResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}

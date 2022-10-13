package operations

type PostErc20AddressPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type PostErc20AddressRequest struct {
	PathParams PostErc20AddressPathParams
}

type PostErc20AddressResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}

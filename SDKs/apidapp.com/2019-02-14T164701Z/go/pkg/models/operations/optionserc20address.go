package operations

type OptionsErc20AddressPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type OptionsErc20AddressRequest struct {
	PathParams OptionsErc20AddressPathParams
}

type OptionsErc20AddressResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Headers     map[string][]string
	StatusCode  int64
}

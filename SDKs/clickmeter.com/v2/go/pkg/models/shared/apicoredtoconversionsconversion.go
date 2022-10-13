package shared

type APICoreDtoConversionsConversionProtocolEnum string

const (
	APICoreDtoConversionsConversionProtocolEnumHTTP  APICoreDtoConversionsConversionProtocolEnum = "Http"
	APICoreDtoConversionsConversionProtocolEnumHTTPS APICoreDtoConversionsConversionProtocolEnum = "Https"
)

type APICoreDtoConversionsConversion struct {
	Code         *string                                      `json:"code" form:"name=code"`
	CreationDate *string                                      `json:"creationDate" form:"name=creationDate"`
	Deleted      *bool                                        `json:"deleted" form:"name=deleted"`
	Description  *string                                      `json:"description" form:"name=description"`
	ID           *int64                                       `json:"id" form:"name=id"`
	Name         *string                                      `json:"name" form:"name=name"`
	Protocol     *APICoreDtoConversionsConversionProtocolEnum `json:"protocol" form:"name=protocol"`
	Value        *float64                                     `json:"value" form:"name=value"`
}

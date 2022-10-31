package shared




type APICoreDtoConversionsConversionProtocolEnum string

const (
    APICoreDtoConversionsConversionProtocolEnumHTTP APICoreDtoConversionsConversionProtocolEnum = "Http"
APICoreDtoConversionsConversionProtocolEnumHTTPS APICoreDtoConversionsConversionProtocolEnum = "Https"
)


type APICoreDtoConversionsConversion struct {
    Code *string `json:"code,omitempty" form:"name=code"`
    CreationDate *string `json:"creationDate,omitempty" form:"name=creationDate"`
    Deleted *bool `json:"deleted,omitempty" form:"name=deleted"`
    Description *string `json:"description,omitempty" form:"name=description"`
    ID *int64 `json:"id,omitempty" form:"name=id"`
    Name *string `json:"name,omitempty" form:"name=name"`
    Protocol *APICoreDtoConversionsConversionProtocolEnum `json:"protocol,omitempty" form:"name=protocol"`
    Value *float64 `json:"value,omitempty" form:"name=value"`
    
}


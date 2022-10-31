package shared



type GetToken struct {
    Contractaddress string `json:"contractaddress"`
    Decimals int32 `json:"decimals"`
    Name string `json:"name"`
    Ok bool `json:"ok"`
    Supply int64 `json:"supply"`
    Symbol string `json:"symbol"`
    
}


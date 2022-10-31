package shared



type GetEthereumBalance struct {
    Balance float64 `json:"balance"`
    Ethereumaddress string `json:"ethereumaddress"`
    Ok bool `json:"ok"`
    
}


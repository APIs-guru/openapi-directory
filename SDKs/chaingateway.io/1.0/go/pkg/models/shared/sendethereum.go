package shared



type SendEthereum struct {
    Amount string `json:"amount"`
    From string `json:"from"`
    Ok bool `json:"ok"`
    To string `json:"to"`
    Txid string `json:"txid"`
    
}


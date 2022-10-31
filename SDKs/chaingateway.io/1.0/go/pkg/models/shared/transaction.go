package shared



type Transaction struct {
    Amount string `json:"amount"`
    BlockNumber string `json:"block_number"`
    ContractAddress string `json:"contract_address"`
    From string `json:"from"`
    Gas string `json:"gas"`
    GasPrice string `json:"gas_price"`
    To string `json:"to"`
    TokenDecimals string `json:"token_decimals"`
    TokenName string `json:"token_name"`
    TokenSupply string `json:"token_supply"`
    TokenSymbol string `json:"token_symbol"`
    Txid string `json:"txid"`
    Type string `json:"type"`
    
}


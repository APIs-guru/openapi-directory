package shared



type SendEthereumRequest struct {
    Amount float64 `json:"amount"`
    From string `json:"from"`
    Password string `json:"password"`
    To string `json:"to"`
    
}


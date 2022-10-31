package shared



type Kdfparams struct {
    Dklen int32 `json:"dklen"`
    N int32 `json:"n"`
    P int32 `json:"p"`
    R int32 `json:"r"`
    Salt string `json:"salt"`
    
}


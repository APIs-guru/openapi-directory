package shared



type ForgetpaireddeviceRequest struct {
    Bond bool `json:"bond"`
    MacAddress string `json:"mac_address"`
    
}


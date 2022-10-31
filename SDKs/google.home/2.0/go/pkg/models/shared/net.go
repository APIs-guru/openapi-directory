package shared



type Net struct {
    EthernetConnected bool `json:"ethernet_connected"`
    IPAddress string `json:"ip_address"`
    Online bool `json:"online"`
    
}


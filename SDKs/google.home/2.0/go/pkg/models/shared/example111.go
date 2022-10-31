package shared



type Example111 struct {
    BondDate float64 `json:"bond_date"`
    DeviceClass int32 `json:"device_class"`
    DeviceType int32 `json:"device_type"`
    LastConnectDate float64 `json:"last_connect_date"`
    MacAddress string `json:"mac_address"`
    Name string `json:"name"`
    Rssi int32 `json:"rssi"`
    ServiceUuids []string `json:"service_uuids"`
    
}


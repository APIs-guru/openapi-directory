package shared

type Stats struct {
	NumCheckConnectivity     int32 `json:"num_check_connectivity"`
	NumConnectWifi           int32 `json:"num_connect_wifi"`
	NumConnectedWifiNotSaved int32 `json:"num_connected_wifi_not_saved"`
	NumInitialEurekaInfo     int32 `json:"num_initial_eureka_info"`
	NumObtainIP              int32 `json:"num_obtain_ip"`
}

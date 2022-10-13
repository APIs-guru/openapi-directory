package shared

type NetworkInfo struct {
	Imei                *string         `json:"imei"`
	Meid                *string         `json:"meid"`
	NetworkOperatorName *string         `json:"networkOperatorName"`
	TelephonyInfos      []TelephonyInfo `json:"telephonyInfos"`
	WifiMacAddress      *string         `json:"wifiMacAddress"`
}

package shared

// NetworkInfo
// Device network info.
type NetworkInfo struct {
	Imei                *string         `json:"imei,omitempty"`
	Meid                *string         `json:"meid,omitempty"`
	NetworkOperatorName *string         `json:"networkOperatorName,omitempty"`
	TelephonyInfos      []TelephonyInfo `json:"telephonyInfos,omitempty"`
	WifiMacAddress      *string         `json:"wifiMacAddress,omitempty"`
}

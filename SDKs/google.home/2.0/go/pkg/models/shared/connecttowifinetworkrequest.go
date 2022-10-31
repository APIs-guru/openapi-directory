package shared

type ConnecttoWiFiNetworkRequest struct {
	Bssid       string `json:"bssid"`
	EncPasswd   string `json:"enc_passwd"`
	SignalLevel int32  `json:"signal_level"`
	Ssid        string `json:"ssid"`
	WpaAuth     int32  `json:"wpa_auth"`
	WpaCipher   int32  `json:"wpa_cipher"`
}

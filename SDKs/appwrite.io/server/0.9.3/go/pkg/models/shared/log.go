package shared

// Log
// Log
type Log struct {
	ClientCode          string `json:"clientCode"`
	ClientEngine        string `json:"clientEngine"`
	ClientEngineVersion string `json:"clientEngineVersion"`
	ClientName          string `json:"clientName"`
	ClientType          string `json:"clientType"`
	ClientVersion       string `json:"clientVersion"`
	CountryCode         string `json:"countryCode"`
	CountryName         string `json:"countryName"`
	DeviceBrand         string `json:"deviceBrand"`
	DeviceModel         string `json:"deviceModel"`
	DeviceName          string `json:"deviceName"`
	Event               string `json:"event"`
	IP                  string `json:"ip"`
	OsCode              string `json:"osCode"`
	OsName              string `json:"osName"`
	OsVersion           string `json:"osVersion"`
	Time                int32  `json:"time"`
}

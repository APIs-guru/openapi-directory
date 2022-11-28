package shared

// Session
// Session
type Session struct {
	DollarID            string `json:"$id"`
	ClientCode          string `json:"clientCode"`
	ClientEngine        string `json:"clientEngine"`
	ClientEngineVersion string `json:"clientEngineVersion"`
	ClientName          string `json:"clientName"`
	ClientType          string `json:"clientType"`
	ClientVersion       string `json:"clientVersion"`
	CountryCode         string `json:"countryCode"`
	CountryName         string `json:"countryName"`
	Current             bool   `json:"current"`
	DeviceBrand         string `json:"deviceBrand"`
	DeviceModel         string `json:"deviceModel"`
	DeviceName          string `json:"deviceName"`
	Expire              int32  `json:"expire"`
	IP                  string `json:"ip"`
	OsCode              string `json:"osCode"`
	OsName              string `json:"osName"`
	OsVersion           string `json:"osVersion"`
	Provider            string `json:"provider"`
	ProviderToken       string `json:"providerToken"`
	ProviderUID         string `json:"providerUid"`
	UserID              string `json:"userId"`
}

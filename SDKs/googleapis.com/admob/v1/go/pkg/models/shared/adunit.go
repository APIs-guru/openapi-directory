package shared

type AdUnit struct {
	AdFormat    *string  `json:"adFormat"`
	AdTypes     []string `json:"adTypes"`
	AdUnitID    *string  `json:"adUnitId"`
	AppID       *string  `json:"appId"`
	DisplayName *string  `json:"displayName"`
	Name        *string  `json:"name"`
}

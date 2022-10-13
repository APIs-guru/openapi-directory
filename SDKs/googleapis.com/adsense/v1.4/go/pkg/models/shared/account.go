package shared

type Account struct {
	CreationTime *string   `json:"creation_time"`
	ID           *string   `json:"id"`
	Kind         *string   `json:"kind"`
	Name         *string   `json:"name"`
	Premium      *bool     `json:"premium"`
	SubAccounts  []Account `json:"subAccounts"`
	Timezone     *string   `json:"timezone"`
}

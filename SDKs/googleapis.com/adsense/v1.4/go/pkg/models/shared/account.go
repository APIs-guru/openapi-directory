package shared

type Account struct {
	CreationTime *string   `json:"creation_time,omitempty"`
	ID           *string   `json:"id,omitempty"`
	Kind         *string   `json:"kind,omitempty"`
	Name         *string   `json:"name,omitempty"`
	Premium      *bool     `json:"premium,omitempty"`
	SubAccounts  []Account `json:"subAccounts,omitempty"`
	Timezone     *string   `json:"timezone,omitempty"`
}

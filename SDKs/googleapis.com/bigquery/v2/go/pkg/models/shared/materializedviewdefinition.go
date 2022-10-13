package shared

type MaterializedViewDefinition struct {
	EnableRefresh     *bool   `json:"enableRefresh"`
	LastRefreshTime   *string `json:"lastRefreshTime"`
	MaxStaleness      *string `json:"maxStaleness"`
	Query             *string `json:"query"`
	RefreshIntervalMs *string `json:"refreshIntervalMs"`
}

package shared

type MaterializedViewDefinition struct {
	EnableRefresh     *bool   `json:"enableRefresh,omitempty"`
	LastRefreshTime   *string `json:"lastRefreshTime,omitempty"`
	MaxStaleness      *string `json:"maxStaleness,omitempty"`
	Query             *string `json:"query,omitempty"`
	RefreshIntervalMs *string `json:"refreshIntervalMs,omitempty"`
}

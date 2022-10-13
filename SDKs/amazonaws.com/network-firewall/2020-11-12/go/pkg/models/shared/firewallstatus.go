package shared

type FirewallStatus struct {
	ConfigurationSyncStateSummary ConfigurationSyncStateEnum `json:"ConfigurationSyncStateSummary"`
	Status                        FirewallStatusValueEnum    `json:"Status"`
	SyncStates                    map[string]SyncState       `json:"SyncStates"`
}

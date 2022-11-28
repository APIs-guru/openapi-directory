package shared

// FirewallStatus
// Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.
type FirewallStatus struct {
	ConfigurationSyncStateSummary ConfigurationSyncStateEnum `json:"ConfigurationSyncStateSummary"`
	Status                        FirewallStatusValueEnum    `json:"Status"`
	SyncStates                    map[string]SyncState       `json:"SyncStates,omitempty"`
}

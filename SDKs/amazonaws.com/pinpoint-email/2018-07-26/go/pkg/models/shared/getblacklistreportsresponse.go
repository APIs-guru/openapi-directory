package shared

// GetBlacklistReportsResponse
// An object that contains information about blacklist events.
type GetBlacklistReportsResponse struct {
	BlacklistReport map[string][]BlacklistEntry `json:"BlacklistReport"`
}

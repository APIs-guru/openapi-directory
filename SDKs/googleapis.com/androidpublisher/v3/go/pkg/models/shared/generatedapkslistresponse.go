package shared

// GeneratedApksListResponse
// Response to list generated APKs.
type GeneratedApksListResponse struct {
	GeneratedApks []GeneratedApksPerSigningKey `json:"generatedApks,omitempty"`
}

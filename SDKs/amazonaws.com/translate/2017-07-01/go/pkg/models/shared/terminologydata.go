package shared

// TerminologyData
// The data associated with the custom terminology.
type TerminologyData struct {
	File   string                    `json:"File"`
	Format TerminologyDataFormatEnum `json:"Format"`
}

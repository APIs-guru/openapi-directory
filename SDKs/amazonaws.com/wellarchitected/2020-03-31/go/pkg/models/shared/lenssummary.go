package shared

// LensSummary
// A lens summary of a lens.
type LensSummary struct {
	Description *string `json:"Description,omitempty"`
	LensAlias   *string `json:"LensAlias,omitempty"`
	LensName    *string `json:"LensName,omitempty"`
	LensVersion *string `json:"LensVersion,omitempty"`
}

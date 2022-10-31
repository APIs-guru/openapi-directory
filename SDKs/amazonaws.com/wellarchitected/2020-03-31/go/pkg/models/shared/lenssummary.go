package shared

type LensSummary struct {
	Description *string `json:"Description,omitempty"`
	LensAlias   *string `json:"LensAlias,omitempty"`
	LensName    *string `json:"LensName,omitempty"`
	LensVersion *string `json:"LensVersion,omitempty"`
}

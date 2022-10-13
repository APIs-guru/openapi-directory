package shared

type LensSummary struct {
	Description *string `json:"Description"`
	LensAlias   *string `json:"LensAlias"`
	LensName    *string `json:"LensName"`
	LensVersion *string `json:"LensVersion"`
}

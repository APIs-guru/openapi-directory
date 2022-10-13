package shared

type CreateHomeRegionControlRequest struct {
	DryRun     *bool  `json:"DryRun"`
	HomeRegion string `json:"HomeRegion"`
	Target     Target `json:"Target"`
}

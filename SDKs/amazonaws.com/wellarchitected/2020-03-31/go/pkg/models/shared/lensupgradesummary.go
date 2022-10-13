package shared

type LensUpgradeSummary struct {
	CurrentLensVersion *string `json:"CurrentLensVersion"`
	LatestLensVersion  *string `json:"LatestLensVersion"`
	LensAlias          *string `json:"LensAlias"`
	WorkloadID         *string `json:"WorkloadId"`
	WorkloadName       *string `json:"WorkloadName"`
}

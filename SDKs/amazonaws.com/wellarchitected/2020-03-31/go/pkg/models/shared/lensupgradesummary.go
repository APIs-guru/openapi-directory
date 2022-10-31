package shared



type LensUpgradeSummary struct {
    CurrentLensVersion *string `json:"CurrentLensVersion,omitempty"`
    LatestLensVersion *string `json:"LatestLensVersion,omitempty"`
    LensAlias *string `json:"LensAlias,omitempty"`
    WorkloadID *string `json:"WorkloadId,omitempty"`
    WorkloadName *string `json:"WorkloadName,omitempty"`
    
}


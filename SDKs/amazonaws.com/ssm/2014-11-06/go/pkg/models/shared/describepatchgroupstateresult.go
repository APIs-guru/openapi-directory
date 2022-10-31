package shared



type DescribePatchGroupStateResult struct {
    Instances *int64 `json:"Instances,omitempty"`
    InstancesWithCriticalNonCompliantPatches *int64 `json:"InstancesWithCriticalNonCompliantPatches,omitempty"`
    InstancesWithFailedPatches *int64 `json:"InstancesWithFailedPatches,omitempty"`
    InstancesWithInstalledOtherPatches *int64 `json:"InstancesWithInstalledOtherPatches,omitempty"`
    InstancesWithInstalledPatches *int64 `json:"InstancesWithInstalledPatches,omitempty"`
    InstancesWithInstalledPendingRebootPatches *int64 `json:"InstancesWithInstalledPendingRebootPatches,omitempty"`
    InstancesWithInstalledRejectedPatches *int64 `json:"InstancesWithInstalledRejectedPatches,omitempty"`
    InstancesWithMissingPatches *int64 `json:"InstancesWithMissingPatches,omitempty"`
    InstancesWithNotApplicablePatches *int64 `json:"InstancesWithNotApplicablePatches,omitempty"`
    InstancesWithOtherNonCompliantPatches *int64 `json:"InstancesWithOtherNonCompliantPatches,omitempty"`
    InstancesWithSecurityNonCompliantPatches *int64 `json:"InstancesWithSecurityNonCompliantPatches,omitempty"`
    InstancesWithUnreportedNotApplicablePatches *int64 `json:"InstancesWithUnreportedNotApplicablePatches,omitempty"`
    
}


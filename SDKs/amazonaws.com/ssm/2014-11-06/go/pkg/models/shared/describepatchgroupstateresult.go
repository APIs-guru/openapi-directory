package shared

type DescribePatchGroupStateResult struct {
	Instances                                   *int64 `json:"Instances"`
	InstancesWithCriticalNonCompliantPatches    *int64 `json:"InstancesWithCriticalNonCompliantPatches"`
	InstancesWithFailedPatches                  *int64 `json:"InstancesWithFailedPatches"`
	InstancesWithInstalledOtherPatches          *int64 `json:"InstancesWithInstalledOtherPatches"`
	InstancesWithInstalledPatches               *int64 `json:"InstancesWithInstalledPatches"`
	InstancesWithInstalledPendingRebootPatches  *int64 `json:"InstancesWithInstalledPendingRebootPatches"`
	InstancesWithInstalledRejectedPatches       *int64 `json:"InstancesWithInstalledRejectedPatches"`
	InstancesWithMissingPatches                 *int64 `json:"InstancesWithMissingPatches"`
	InstancesWithNotApplicablePatches           *int64 `json:"InstancesWithNotApplicablePatches"`
	InstancesWithOtherNonCompliantPatches       *int64 `json:"InstancesWithOtherNonCompliantPatches"`
	InstancesWithSecurityNonCompliantPatches    *int64 `json:"InstancesWithSecurityNonCompliantPatches"`
	InstancesWithUnreportedNotApplicablePatches *int64 `json:"InstancesWithUnreportedNotApplicablePatches"`
}

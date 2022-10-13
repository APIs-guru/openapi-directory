package shared

type AddOn struct {
	Name                  *string `json:"name"`
	NextSnapshotTimeOfDay *string `json:"nextSnapshotTimeOfDay"`
	SnapshotTimeOfDay     *string `json:"snapshotTimeOfDay"`
	Status                *string `json:"status"`
}

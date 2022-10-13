package shared

type GoogleCloudApigeeV1ResourceStatus struct {
	Resource      *string                             `json:"resource"`
	Revisions     []GoogleCloudApigeeV1RevisionStatus `json:"revisions"`
	TotalReplicas *int32                              `json:"totalReplicas"`
	UID           *string                             `json:"uid"`
}

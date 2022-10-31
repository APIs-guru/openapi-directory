package shared

type GoogleCloudApigeeV1ResourceStatus struct {
	Resource      *string                             `json:"resource,omitempty"`
	Revisions     []GoogleCloudApigeeV1RevisionStatus `json:"revisions,omitempty"`
	TotalReplicas *int32                              `json:"totalReplicas,omitempty"`
	UID           *string                             `json:"uid,omitempty"`
}

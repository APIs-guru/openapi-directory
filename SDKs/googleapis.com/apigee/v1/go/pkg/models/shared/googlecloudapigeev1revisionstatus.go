package shared

type GoogleCloudApigeeV1RevisionStatus struct {
	Errors     []GoogleCloudApigeeV1UpdateError `json:"errors"`
	JSONSpec   *string                          `json:"jsonSpec"`
	Replicas   *int32                           `json:"replicas"`
	RevisionID *string                          `json:"revisionId"`
}

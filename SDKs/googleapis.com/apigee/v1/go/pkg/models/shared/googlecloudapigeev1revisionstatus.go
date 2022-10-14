package shared

type GoogleCloudApigeeV1RevisionStatus struct {
	Errors     []GoogleCloudApigeeV1UpdateError `json:"errors,omitempty"`
	JSONSpec   *string                          `json:"jsonSpec,omitempty"`
	Replicas   *int32                           `json:"replicas,omitempty"`
	RevisionID *string                          `json:"revisionId,omitempty"`
}

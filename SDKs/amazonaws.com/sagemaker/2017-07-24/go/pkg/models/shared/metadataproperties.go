package shared

type MetadataProperties struct {
	CommitID    *string `json:"CommitId"`
	GeneratedBy *string `json:"GeneratedBy"`
	ProjectID   *string `json:"ProjectId"`
	Repository  *string `json:"Repository"`
}

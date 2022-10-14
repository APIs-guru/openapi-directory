package shared

type CreateTrialRequest struct {
	DisplayName        *string             `json:"DisplayName,omitempty"`
	ExperimentName     string              `json:"ExperimentName"`
	MetadataProperties *MetadataProperties `json:"MetadataProperties,omitempty"`
	Tags               []Tag               `json:"Tags,omitempty"`
	TrialName          string              `json:"TrialName"`
}

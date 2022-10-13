package shared

type CreateTrialRequest struct {
	DisplayName        *string             `json:"DisplayName"`
	ExperimentName     string              `json:"ExperimentName"`
	MetadataProperties *MetadataProperties `json:"MetadataProperties"`
	Tags               []Tag               `json:"Tags"`
	TrialName          string              `json:"TrialName"`
}

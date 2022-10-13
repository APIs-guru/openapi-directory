package shared

type CreateActionRequest struct {
	ActionName         string              `json:"ActionName"`
	ActionType         string              `json:"ActionType"`
	Description        *string             `json:"Description"`
	MetadataProperties *MetadataProperties `json:"MetadataProperties"`
	Properties         map[string]string   `json:"Properties"`
	Source             ActionSource        `json:"Source"`
	Status             *ActionStatusEnum   `json:"Status"`
	Tags               []Tag               `json:"Tags"`
}

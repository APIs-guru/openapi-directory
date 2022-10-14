package shared

type CreateActionRequest struct {
	ActionName         string              `json:"ActionName"`
	ActionType         string              `json:"ActionType"`
	Description        *string             `json:"Description,omitempty"`
	MetadataProperties *MetadataProperties `json:"MetadataProperties,omitempty"`
	Properties         map[string]string   `json:"Properties,omitempty"`
	Source             ActionSource        `json:"Source"`
	Status             *ActionStatusEnum   `json:"Status,omitempty"`
	Tags               []Tag               `json:"Tags,omitempty"`
}

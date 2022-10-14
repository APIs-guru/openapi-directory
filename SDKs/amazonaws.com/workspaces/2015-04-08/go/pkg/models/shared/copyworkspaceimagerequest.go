package shared

type CopyWorkspaceImageRequest struct {
	Description   *string `json:"Description,omitempty"`
	Name          string  `json:"Name"`
	SourceImageID string  `json:"SourceImageId"`
	SourceRegion  string  `json:"SourceRegion"`
	Tags          []Tag   `json:"Tags,omitempty"`
}

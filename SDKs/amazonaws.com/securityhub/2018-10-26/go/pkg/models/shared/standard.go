package shared

type Standard struct {
	Description      *string `json:"Description"`
	EnabledByDefault *bool   `json:"EnabledByDefault"`
	Name             *string `json:"Name"`
	StandardsArn     *string `json:"StandardsArn"`
}

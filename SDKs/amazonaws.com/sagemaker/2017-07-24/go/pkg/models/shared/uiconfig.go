package shared

// UIConfig
// <p>Provided configuration information for the worker UI for a labeling job. Provide either <code>HumanTaskUiArn</code> or <code>UiTemplateS3Uri</code>.</p> <p>For named entity recognition, 3D point cloud and video frame labeling jobs, use <code>HumanTaskUiArn</code>.</p> <p>For all other Ground Truth built-in task types and custom task types, use <code>UiTemplateS3Uri</code> to specify the location of a worker task template in Amazon S3.</p>
type UIConfig struct {
	HumanTaskUIArn  *string `json:"HumanTaskUiArn,omitempty"`
	UITemplateS3URI *string `json:"UiTemplateS3Uri,omitempty"`
}

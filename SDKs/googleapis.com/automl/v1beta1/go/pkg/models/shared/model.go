package shared

type ModelDeploymentStateEnum string

const (
	ModelDeploymentStateEnumDeploymentStateUnspecified ModelDeploymentStateEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ModelDeploymentStateEnumDeployed                   ModelDeploymentStateEnum = "DEPLOYED"
	ModelDeploymentStateEnumUndeployed                 ModelDeploymentStateEnum = "UNDEPLOYED"
)

// Model
// API proto representing a trained machine learning model.
type Model struct {
	CreateTime                        *string                            `json:"createTime,omitempty"`
	DatasetID                         *string                            `json:"datasetId,omitempty"`
	DeploymentState                   *ModelDeploymentStateEnum          `json:"deploymentState,omitempty"`
	DisplayName                       *string                            `json:"displayName,omitempty"`
	ImageClassificationModelMetadata  *ImageClassificationModelMetadata  `json:"imageClassificationModelMetadata,omitempty"`
	ImageObjectDetectionModelMetadata *ImageObjectDetectionModelMetadata `json:"imageObjectDetectionModelMetadata,omitempty"`
	Name                              *string                            `json:"name,omitempty"`
	TablesModelMetadata               *TablesModelMetadata               `json:"tablesModelMetadata,omitempty"`
	TextClassificationModelMetadata   *TextClassificationModelMetadata   `json:"textClassificationModelMetadata,omitempty"`
	TextExtractionModelMetadata       *TextExtractionModelMetadata       `json:"textExtractionModelMetadata,omitempty"`
	TextSentimentModelMetadata        map[string]interface{}             `json:"textSentimentModelMetadata,omitempty"`
	TranslationModelMetadata          *TranslationModelMetadata          `json:"translationModelMetadata,omitempty"`
	UpdateTime                        *string                            `json:"updateTime,omitempty"`
	VideoClassificationModelMetadata  map[string]interface{}             `json:"videoClassificationModelMetadata,omitempty"`
	VideoObjectTrackingModelMetadata  map[string]interface{}             `json:"videoObjectTrackingModelMetadata,omitempty"`
}

package shared

type ModelDeploymentStateEnum string

const (
	ModelDeploymentStateEnumDeploymentStateUnspecified ModelDeploymentStateEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ModelDeploymentStateEnumDeployed                   ModelDeploymentStateEnum = "DEPLOYED"
	ModelDeploymentStateEnumUndeployed                 ModelDeploymentStateEnum = "UNDEPLOYED"
)

type Model struct {
	CreateTime                        *string                            `json:"createTime"`
	DatasetID                         *string                            `json:"datasetId"`
	DeploymentState                   *ModelDeploymentStateEnum          `json:"deploymentState"`
	DisplayName                       *string                            `json:"displayName"`
	ImageClassificationModelMetadata  *ImageClassificationModelMetadata  `json:"imageClassificationModelMetadata"`
	ImageObjectDetectionModelMetadata *ImageObjectDetectionModelMetadata `json:"imageObjectDetectionModelMetadata"`
	Name                              *string                            `json:"name"`
	TablesModelMetadata               *TablesModelMetadata               `json:"tablesModelMetadata"`
	TextClassificationModelMetadata   *TextClassificationModelMetadata   `json:"textClassificationModelMetadata"`
	TextExtractionModelMetadata       *TextExtractionModelMetadata       `json:"textExtractionModelMetadata"`
	TextSentimentModelMetadata        map[string]interface{}             `json:"textSentimentModelMetadata"`
	TranslationModelMetadata          *TranslationModelMetadata          `json:"translationModelMetadata"`
	UpdateTime                        *string                            `json:"updateTime"`
	VideoClassificationModelMetadata  map[string]interface{}             `json:"videoClassificationModelMetadata"`
	VideoObjectTrackingModelMetadata  map[string]interface{}             `json:"videoObjectTrackingModelMetadata"`
}

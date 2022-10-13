package shared

type VisualReferenceOutput struct {
	BaseCanaryRunID *string          `json:"BaseCanaryRunId"`
	BaseScreenshots []BaseScreenshot `json:"BaseScreenshots"`
}

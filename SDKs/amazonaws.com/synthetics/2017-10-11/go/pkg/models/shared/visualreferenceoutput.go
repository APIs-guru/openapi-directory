package shared



type VisualReferenceOutput struct {
    BaseCanaryRunID *string `json:"BaseCanaryRunId,omitempty"`
    BaseScreenshots []BaseScreenshot `json:"BaseScreenshots,omitempty"`
    
}


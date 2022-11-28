package shared

// VisualReferenceOutput
// <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates of any parts of those screenshots that are ignored during visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p>
type VisualReferenceOutput struct {
	BaseCanaryRunID *string          `json:"BaseCanaryRunId,omitempty"`
	BaseScreenshots []BaseScreenshot `json:"BaseScreenshots,omitempty"`
}

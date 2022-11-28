package shared

// BaseScreenshot
// A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.
type BaseScreenshot struct {
	IgnoreCoordinates []string `json:"IgnoreCoordinates,omitempty"`
	ScreenshotName    string   `json:"ScreenshotName"`
}

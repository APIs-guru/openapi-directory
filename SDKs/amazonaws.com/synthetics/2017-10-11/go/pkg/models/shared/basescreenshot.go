package shared

type BaseScreenshot struct {
	IgnoreCoordinates []string `json:"IgnoreCoordinates,omitempty"`
	ScreenshotName    string   `json:"ScreenshotName"`
}

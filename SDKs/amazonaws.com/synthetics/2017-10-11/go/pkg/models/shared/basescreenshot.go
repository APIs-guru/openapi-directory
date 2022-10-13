package shared

type BaseScreenshot struct {
	IgnoreCoordinates []string `json:"IgnoreCoordinates"`
	ScreenshotName    string   `json:"ScreenshotName"`
}

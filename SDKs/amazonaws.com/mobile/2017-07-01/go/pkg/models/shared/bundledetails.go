package shared

type BundleDetails struct {
	AvailablePlatforms []PlatformEnum `json:"availablePlatforms"`
	BundleID           *string        `json:"bundleId"`
	Description        *string        `json:"description"`
	IconURL            *string        `json:"iconUrl"`
	Title              *string        `json:"title"`
	Version            *string        `json:"version"`
}

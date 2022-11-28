package shared

type PlatformContextPlatformsEnum string

const (
	PlatformContextPlatformsEnumDesktop PlatformContextPlatformsEnum = "DESKTOP"
	PlatformContextPlatformsEnumAndroid PlatformContextPlatformsEnum = "ANDROID"
	PlatformContextPlatformsEnumIos     PlatformContextPlatformsEnum = "IOS"
)

// PlatformContext
// Output only. The type of platform the restriction applies to.
type PlatformContext struct {
	Platforms []PlatformContextPlatformsEnum `json:"platforms,omitempty"`
}

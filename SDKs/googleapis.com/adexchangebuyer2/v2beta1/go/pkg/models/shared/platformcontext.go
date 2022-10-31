package shared




type PlatformContextPlatformsEnum string

const (
    PlatformContextPlatformsEnumDesktop PlatformContextPlatformsEnum = "DESKTOP"
PlatformContextPlatformsEnumAndroid PlatformContextPlatformsEnum = "ANDROID"
PlatformContextPlatformsEnumIos PlatformContextPlatformsEnum = "IOS"
)


type PlatformContext struct {
    Platforms []PlatformContextPlatformsEnum `json:"platforms,omitempty"`
    
}


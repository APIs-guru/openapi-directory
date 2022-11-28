package shared

// Apk
// Information about an APK. The resource for ApksService.
type Apk struct {
	Binary      *ApkBinary `json:"binary,omitempty"`
	VersionCode *int32     `json:"versionCode,omitempty"`
}

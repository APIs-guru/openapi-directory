package shared

type Apk struct {
	Binary      *ApkBinary `json:"binary"`
	VersionCode *int32     `json:"versionCode"`
}

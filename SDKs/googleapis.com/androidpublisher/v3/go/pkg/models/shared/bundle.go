package shared

type Bundle struct {
	Sha1        *string `json:"sha1"`
	Sha256      *string `json:"sha256"`
	VersionCode *int32  `json:"versionCode"`
}

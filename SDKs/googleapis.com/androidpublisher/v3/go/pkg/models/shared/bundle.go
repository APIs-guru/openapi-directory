package shared



type Bundle struct {
    Sha1 *string `json:"sha1,omitempty"`
    Sha256 *string `json:"sha256,omitempty"`
    VersionCode *int32 `json:"versionCode,omitempty"`
    
}


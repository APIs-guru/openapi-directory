package shared



type Apk struct {
    Binary *ApkBinary `json:"binary,omitempty"`
    VersionCode *int32 `json:"versionCode,omitempty"`
    
}


package shared



type Track struct {
    Track *string `json:"track,omitempty"`
    UserFraction *float64 `json:"userFraction,omitempty"`
    VersionCodes []int32 `json:"versionCodes,omitempty"`
    
}


package shared



type ActivityTypeInfos struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TypeInfos []ActivityTypeInfo `json:"typeInfos"`
    
}


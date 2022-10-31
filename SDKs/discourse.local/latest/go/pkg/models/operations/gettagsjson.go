package operations



type GetTagsJSON200ApplicationJSONExtras struct {
    Categories []interface{} `json:"categories,omitempty"`
    
}

type GetTagsJSON200ApplicationJSONTags struct {
    Count *int64 `json:"count,omitempty"`
    ID *string `json:"id,omitempty"`
    PmCount *int64 `json:"pm_count,omitempty"`
    TargetTag *string `json:"target_tag,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

type GetTagsJSON200ApplicationJSON struct {
    Extras *GetTagsJSON200ApplicationJSONExtras `json:"extras,omitempty"`
    Tags []GetTagsJSON200ApplicationJSONTags `json:"tags,omitempty"`
    
}

type GetTagsJSONResponse struct {
    ContentType string 
    GetTagsJSON200ApplicationJSONObject *GetTagsJSON200ApplicationJSON 
    StatusCode int64 
    
}


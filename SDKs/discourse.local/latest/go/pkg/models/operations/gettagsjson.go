package operations

type GetTagsJSON200ApplicationJSONExtras struct {
	Categories []interface{} `json:"categories"`
}

type GetTagsJSON200ApplicationJSONTags struct {
	Count     *int64  `json:"count"`
	ID        *string `json:"id"`
	PmCount   *int64  `json:"pm_count"`
	TargetTag *string `json:"target_tag"`
	Text      *string `json:"text"`
}

type GetTagsJSON200ApplicationJSON struct {
	Extras *GetTagsJSON200ApplicationJSONExtras `json:"extras"`
	Tags   []GetTagsJSON200ApplicationJSONTags  `json:"tags"`
}

type GetTagsJSONResponse struct {
	ContentType                         string
	GetTagsJSON200ApplicationJSONObject *GetTagsJSON200ApplicationJSON
	StatusCode                          int64
}

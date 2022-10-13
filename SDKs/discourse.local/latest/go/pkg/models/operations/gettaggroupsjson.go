package operations

type GetTagGroupsJSON200ApplicationJSONTagGroupsPermissions struct {
	Staff *int64 `json:"staff"`
}

type GetTagGroupsJSON200ApplicationJSONTagGroups struct {
	ID            *int64                                                  `json:"id"`
	Name          *string                                                 `json:"name"`
	OnePerTopic   *bool                                                   `json:"one_per_topic"`
	ParentTagName []interface{}                                           `json:"parent_tag_name"`
	Permissions   *GetTagGroupsJSON200ApplicationJSONTagGroupsPermissions `json:"permissions"`
	TagNames      []interface{}                                           `json:"tag_names"`
}

type GetTagGroupsJSON200ApplicationJSON struct {
	TagGroups []GetTagGroupsJSON200ApplicationJSONTagGroups `json:"tag_groups"`
}

type GetTagGroupsJSONResponse struct {
	ContentType                              string
	GetTagGroupsJSON200ApplicationJSONObject *GetTagGroupsJSON200ApplicationJSON
	StatusCode                               int64
}

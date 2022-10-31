package operations

type GetTagGroupsJSON200ApplicationJSONTagGroupsPermissions struct {
	Staff *int64 `json:"staff,omitempty"`
}

type GetTagGroupsJSON200ApplicationJSONTagGroups struct {
	ID            *int64                                                  `json:"id,omitempty"`
	Name          *string                                                 `json:"name,omitempty"`
	OnePerTopic   *bool                                                   `json:"one_per_topic,omitempty"`
	ParentTagName []interface{}                                           `json:"parent_tag_name,omitempty"`
	Permissions   *GetTagGroupsJSON200ApplicationJSONTagGroupsPermissions `json:"permissions,omitempty"`
	TagNames      []interface{}                                           `json:"tag_names,omitempty"`
}

type GetTagGroupsJSON200ApplicationJSON struct {
	TagGroups []GetTagGroupsJSON200ApplicationJSONTagGroups `json:"tag_groups,omitempty"`
}

type GetTagGroupsJSONResponse struct {
	ContentType                              string
	GetTagGroupsJSON200ApplicationJSONObject *GetTagGroupsJSON200ApplicationJSON
	StatusCode                               int64
}

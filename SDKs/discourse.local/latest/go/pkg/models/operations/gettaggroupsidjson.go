package operations

type GetTagGroupsIDJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTagGroupsIDJSON200ApplicationJSONTagGroupPermissions struct {
	Everyone *int64 `json:"everyone,omitempty"`
}

type GetTagGroupsIDJSON200ApplicationJSONTagGroup struct {
	ID            *int64                                                   `json:"id,omitempty"`
	Name          *string                                                  `json:"name,omitempty"`
	OnePerTopic   *bool                                                    `json:"one_per_topic,omitempty"`
	ParentTagName []interface{}                                            `json:"parent_tag_name,omitempty"`
	Permissions   *GetTagGroupsIDJSON200ApplicationJSONTagGroupPermissions `json:"permissions,omitempty"`
	TagNames      []interface{}                                            `json:"tag_names,omitempty"`
}

type GetTagGroupsIDJSON200ApplicationJSON struct {
	TagGroup *GetTagGroupsIDJSON200ApplicationJSONTagGroup `json:"tag_group,omitempty"`
}

type GetTagGroupsIDJSONRequest struct {
	PathParams GetTagGroupsIDJSONPathParams
}

type GetTagGroupsIDJSONResponse struct {
	ContentType                                string
	GetTagGroupsIDJSON200ApplicationJSONObject *GetTagGroupsIDJSON200ApplicationJSON
	StatusCode                                 int64
}

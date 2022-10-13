package operations

type GetTagGroupsIDJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTagGroupsIDJSONRequest struct {
	PathParams GetTagGroupsIDJSONPathParams
}

type GetTagGroupsIDJSON200ApplicationJSONTagGroupPermissions struct {
	Everyone *int64 `json:"everyone"`
}

type GetTagGroupsIDJSON200ApplicationJSONTagGroup struct {
	ID            *int64                                                   `json:"id"`
	Name          *string                                                  `json:"name"`
	OnePerTopic   *bool                                                    `json:"one_per_topic"`
	ParentTagName []interface{}                                            `json:"parent_tag_name"`
	Permissions   *GetTagGroupsIDJSON200ApplicationJSONTagGroupPermissions `json:"permissions"`
	TagNames      []interface{}                                            `json:"tag_names"`
}

type GetTagGroupsIDJSON200ApplicationJSON struct {
	TagGroup *GetTagGroupsIDJSON200ApplicationJSONTagGroup `json:"tag_group"`
}

type GetTagGroupsIDJSONResponse struct {
	ContentType                                string
	GetTagGroupsIDJSON200ApplicationJSONObject *GetTagGroupsIDJSON200ApplicationJSON
	StatusCode                                 int64
}

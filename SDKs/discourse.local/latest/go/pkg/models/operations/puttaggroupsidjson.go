package operations

type PutTagGroupsIDJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutTagGroupsIDJSONRequestBody struct {
	Name *string `json:"name"`
}

type PutTagGroupsIDJSONRequest struct {
	PathParams PutTagGroupsIDJSONPathParams
	Request    *PutTagGroupsIDJSONRequestBody `request:"mediaType=application/json"`
}

type PutTagGroupsIDJSON200ApplicationJSONTagGroupPermissions struct {
	Everyone *int64 `json:"everyone"`
}

type PutTagGroupsIDJSON200ApplicationJSONTagGroup struct {
	ID            *int64                                                   `json:"id"`
	Name          *string                                                  `json:"name"`
	OnePerTopic   *bool                                                    `json:"one_per_topic"`
	ParentTagName []interface{}                                            `json:"parent_tag_name"`
	Permissions   *PutTagGroupsIDJSON200ApplicationJSONTagGroupPermissions `json:"permissions"`
	TagNames      []interface{}                                            `json:"tag_names"`
}

type PutTagGroupsIDJSON200ApplicationJSON struct {
	Success  *string                                       `json:"success"`
	TagGroup *PutTagGroupsIDJSON200ApplicationJSONTagGroup `json:"tag_group"`
}

type PutTagGroupsIDJSONResponse struct {
	ContentType                                string
	PutTagGroupsIDJSON200ApplicationJSONObject *PutTagGroupsIDJSON200ApplicationJSON
	StatusCode                                 int64
}

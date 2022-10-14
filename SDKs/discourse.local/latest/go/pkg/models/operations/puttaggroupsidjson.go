package operations

type PutTagGroupsIDJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutTagGroupsIDJSONRequestBody struct {
	Name *string `json:"name,omitempty"`
}

type PutTagGroupsIDJSONRequest struct {
	PathParams PutTagGroupsIDJSONPathParams
	Request    *PutTagGroupsIDJSONRequestBody `request:"mediaType=application/json"`
}

type PutTagGroupsIDJSON200ApplicationJSONTagGroupPermissions struct {
	Everyone *int64 `json:"everyone,omitempty"`
}

type PutTagGroupsIDJSON200ApplicationJSONTagGroup struct {
	ID            *int64                                                   `json:"id,omitempty"`
	Name          *string                                                  `json:"name,omitempty"`
	OnePerTopic   *bool                                                    `json:"one_per_topic,omitempty"`
	ParentTagName []interface{}                                            `json:"parent_tag_name,omitempty"`
	Permissions   *PutTagGroupsIDJSON200ApplicationJSONTagGroupPermissions `json:"permissions,omitempty"`
	TagNames      []interface{}                                            `json:"tag_names,omitempty"`
}

type PutTagGroupsIDJSON200ApplicationJSON struct {
	Success  *string                                       `json:"success,omitempty"`
	TagGroup *PutTagGroupsIDJSON200ApplicationJSONTagGroup `json:"tag_group,omitempty"`
}

type PutTagGroupsIDJSONResponse struct {
	ContentType                                string
	PutTagGroupsIDJSON200ApplicationJSONObject *PutTagGroupsIDJSON200ApplicationJSON
	StatusCode                                 int64
}

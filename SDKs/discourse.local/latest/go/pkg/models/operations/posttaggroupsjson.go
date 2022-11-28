package operations

type PostTagGroupsJSONRequestBody struct {
	Name string `json:"name"`
}

type PostTagGroupsJSON200ApplicationJSONTagGroup struct {
	ID            int64                  `json:"id"`
	Name          string                 `json:"name"`
	OnePerTopic   bool                   `json:"one_per_topic"`
	ParentTagName []interface{}          `json:"parent_tag_name"`
	Permissions   map[string]interface{} `json:"permissions"`
	TagNames      []interface{}          `json:"tag_names"`
}

type PostTagGroupsJSON200ApplicationJSON struct {
	TagGroup PostTagGroupsJSON200ApplicationJSONTagGroup `json:"tag_group"`
}

type PostTagGroupsJSONRequest struct {
	Request *PostTagGroupsJSONRequestBody `request:"mediaType=application/json"`
}

type PostTagGroupsJSONResponse struct {
	ContentType                               string
	PostTagGroupsJSON200ApplicationJSONObject *PostTagGroupsJSON200ApplicationJSON
	StatusCode                                int64
}

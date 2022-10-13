package shared

type ActivityTypeInfos struct {
	NextPageToken *string            `json:"nextPageToken"`
	TypeInfos     []ActivityTypeInfo `json:"typeInfos"`
}

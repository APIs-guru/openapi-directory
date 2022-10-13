package shared

type WorkflowTypeInfos struct {
	NextPageToken *string            `json:"nextPageToken"`
	TypeInfos     []WorkflowTypeInfo `json:"typeInfos"`
}

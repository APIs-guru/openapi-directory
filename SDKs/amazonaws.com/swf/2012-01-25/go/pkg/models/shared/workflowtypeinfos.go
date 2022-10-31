package shared

type WorkflowTypeInfos struct {
	NextPageToken *string            `json:"nextPageToken,omitempty"`
	TypeInfos     []WorkflowTypeInfo `json:"typeInfos"`
}

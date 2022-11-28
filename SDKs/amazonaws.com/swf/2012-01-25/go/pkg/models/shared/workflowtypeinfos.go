package shared

// WorkflowTypeInfos
// Contains a paginated list of information structures about workflow types.
type WorkflowTypeInfos struct {
	NextPageToken *string            `json:"nextPageToken,omitempty"`
	TypeInfos     []WorkflowTypeInfo `json:"typeInfos"`
}

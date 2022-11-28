package shared

type BatchRequestActionMethodEnum string

const (
	BatchRequestActionMethodEnumGet    BatchRequestActionMethodEnum = "get"
	BatchRequestActionMethodEnumPost   BatchRequestActionMethodEnum = "post"
	BatchRequestActionMethodEnumPut    BatchRequestActionMethodEnum = "put"
	BatchRequestActionMethodEnumDelete BatchRequestActionMethodEnum = "delete"
	BatchRequestActionMethodEnumPatch  BatchRequestActionMethodEnum = "patch"
	BatchRequestActionMethodEnumHead   BatchRequestActionMethodEnum = "head"
)

// BatchRequestActionOptions
// Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
type BatchRequestActionOptions struct {
	Fields []string `json:"fields,omitempty"`
	Limit  *int64   `json:"limit,omitempty"`
	Offset *int64   `json:"offset,omitempty"`
}

// BatchRequestAction
// An action object for use in a batch request.
type BatchRequestAction struct {
	Data         map[string]interface{}       `json:"data,omitempty"`
	Method       BatchRequestActionMethodEnum `json:"method"`
	Options      *BatchRequestActionOptions   `json:"options,omitempty"`
	RelativePath string                       `json:"relative_path"`
}

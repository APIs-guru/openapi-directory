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

type BatchRequestActionOptions struct {
	Fields []string `json:"fields"`
	Limit  *int64   `json:"limit"`
	Offset *int64   `json:"offset"`
}

type BatchRequestAction struct {
	Data         map[string]interface{}       `json:"data"`
	Method       BatchRequestActionMethodEnum `json:"method"`
	Options      *BatchRequestActionOptions   `json:"options"`
	RelativePath string                       `json:"relative_path"`
}

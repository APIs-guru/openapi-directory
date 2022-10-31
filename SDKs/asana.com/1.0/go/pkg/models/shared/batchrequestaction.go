package shared




type BatchRequestActionMethodEnum string

const (
    BatchRequestActionMethodEnumGet BatchRequestActionMethodEnum = "get"
BatchRequestActionMethodEnumPost BatchRequestActionMethodEnum = "post"
BatchRequestActionMethodEnumPut BatchRequestActionMethodEnum = "put"
BatchRequestActionMethodEnumDelete BatchRequestActionMethodEnum = "delete"
BatchRequestActionMethodEnumPatch BatchRequestActionMethodEnum = "patch"
BatchRequestActionMethodEnumHead BatchRequestActionMethodEnum = "head"
)


type BatchRequestActionOptions struct {
    Fields []string `json:"fields,omitempty"`
    Limit *int64 `json:"limit,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    
}

type BatchRequestAction struct {
    Data map[string]interface{} `json:"data,omitempty"`
    Method BatchRequestActionMethodEnum `json:"method"`
    Options *BatchRequestActionOptions `json:"options,omitempty"`
    RelativePath string `json:"relative_path"`
    
}


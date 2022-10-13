package shared

type QueryParameterValue struct {
	ArrayValues  []QueryParameterValue          `json:"arrayValues"`
	StructValues map[string]QueryParameterValue `json:"structValues"`
	Value        *string                        `json:"value"`
}

package shared

type GoogleCloudApigeeV1DebugSessionInput struct {
	Count     *int32  `json:"count,omitempty"`
	Filter    *string `json:"filter,omitempty"`
	Name      *string `json:"name,omitempty"`
	Timeout   *string `json:"timeout,omitempty"`
	Tracesize *int32  `json:"tracesize,omitempty"`
	Validity  *int32  `json:"validity,omitempty"`
}

type GoogleCloudApigeeV1DebugSession struct {
	Count      *int32  `json:"count,omitempty"`
	CreateTime *string `json:"createTime,omitempty"`
	Filter     *string `json:"filter,omitempty"`
	Name       *string `json:"name,omitempty"`
	Timeout    *string `json:"timeout,omitempty"`
	Tracesize  *int32  `json:"tracesize,omitempty"`
	Validity   *int32  `json:"validity,omitempty"`
}

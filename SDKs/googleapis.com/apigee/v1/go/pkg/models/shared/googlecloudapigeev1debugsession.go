package shared

type GoogleCloudApigeeV1DebugSession struct {
	Count      *int32  `json:"count"`
	CreateTime *string `json:"createTime"`
	Filter     *string `json:"filter"`
	Name       *string `json:"name"`
	Timeout    *string `json:"timeout"`
	Tracesize  *int32  `json:"tracesize"`
	Validity   *int32  `json:"validity"`
}

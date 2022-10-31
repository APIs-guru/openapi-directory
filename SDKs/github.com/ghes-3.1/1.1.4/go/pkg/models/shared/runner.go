package shared

type RunnerLabelsTypeEnum string

const (
	RunnerLabelsTypeEnumReadOnly RunnerLabelsTypeEnum = "read-only"
	RunnerLabelsTypeEnumCustom   RunnerLabelsTypeEnum = "custom"
)

type RunnerLabels struct {
	ID   *int64                `json:"id,omitempty"`
	Name *string               `json:"name,omitempty"`
	Type *RunnerLabelsTypeEnum `json:"type,omitempty"`
}

type Runner struct {
	Busy   bool           `json:"busy"`
	ID     int64          `json:"id"`
	Labels []RunnerLabels `json:"labels"`
	Name   string         `json:"name"`
	Os     string         `json:"os"`
	Status string         `json:"status"`
}

package shared

// CPU
// Source server CPU information.
type CPU struct {
	Cores     *int64  `json:"cores,omitempty"`
	ModelName *string `json:"modelName,omitempty"`
}

package shared

// Tag
// Tag
type Tag struct {
	DollarID    string `json:"$id"`
	Command     string `json:"command"`
	DateCreated int32  `json:"dateCreated"`
	FunctionID  string `json:"functionId"`
	Size        string `json:"size"`
}

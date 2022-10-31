package shared

type DataProcessing struct {
	InputFilter  *string         `json:"InputFilter,omitempty"`
	JoinSource   *JoinSourceEnum `json:"JoinSource,omitempty"`
	OutputFilter *string         `json:"OutputFilter,omitempty"`
}

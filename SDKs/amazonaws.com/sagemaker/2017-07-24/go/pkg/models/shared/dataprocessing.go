package shared

type DataProcessing struct {
	InputFilter  *string         `json:"InputFilter"`
	JoinSource   *JoinSourceEnum `json:"JoinSource"`
	OutputFilter *string         `json:"OutputFilter"`
}

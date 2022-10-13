package shared

type SsmAutomation struct {
	DocumentName    string                `json:"documentName"`
	DocumentVersion *string               `json:"documentVersion"`
	Parameters      map[string][]string   `json:"parameters"`
	RoleArn         string                `json:"roleArn"`
	TargetAccount   *SsmTargetAccountEnum `json:"targetAccount"`
}

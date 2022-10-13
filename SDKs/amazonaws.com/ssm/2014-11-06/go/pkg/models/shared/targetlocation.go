package shared

type TargetLocation struct {
	Accounts                     []string `json:"Accounts"`
	ExecutionRoleName            *string  `json:"ExecutionRoleName"`
	Regions                      []string `json:"Regions"`
	TargetLocationMaxConcurrency *string  `json:"TargetLocationMaxConcurrency"`
	TargetLocationMaxErrors      *string  `json:"TargetLocationMaxErrors"`
}

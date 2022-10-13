package shared

type User struct {
	ACLNames             []string        `json:"ACLNames"`
	Arn                  *string         `json:"ARN"`
	AccessString         *string         `json:"AccessString"`
	Authentication       *Authentication `json:"Authentication"`
	MinimumEngineVersion *string         `json:"MinimumEngineVersion"`
	Name                 *string         `json:"Name"`
	Status               *string         `json:"Status"`
}

package shared

// GoogleCloudApigeeV1SecurityProfileEnvironment
// Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile.
type GoogleCloudApigeeV1SecurityProfileEnvironment struct {
	AttachTime  *string `json:"attachTime,omitempty"`
	Environment *string `json:"environment,omitempty"`
}

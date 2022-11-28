package shared

// AdBlockingRecoveryTag
// Representation of an ad blocking recovery tag. See https://support.google.com/adsense/answer/11575177.
type AdBlockingRecoveryTag struct {
	ErrorProtectionCode *string `json:"errorProtectionCode,omitempty"`
	Tag                 *string `json:"tag,omitempty"`
}

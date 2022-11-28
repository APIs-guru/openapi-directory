package shared

// SingleMasterConfiguration
// A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
type SingleMasterConfiguration struct {
	MessageTTLSeconds *int64 `json:"MessageTtlSeconds,omitempty"`
}

package shared

// DeliveryOptions
// Used to associate a configuration set with a dedicated IP pool.
type DeliveryOptions struct {
	SendingPoolName *string        `json:"SendingPoolName,omitempty"`
	TLSPolicy       *TLSPolicyEnum `json:"TlsPolicy,omitempty"`
}

package shared

type DeliveryOptions struct {
	SendingPoolName *string        `json:"SendingPoolName,omitempty"`
	TLSPolicy       *TLSPolicyEnum `json:"TlsPolicy,omitempty"`
}

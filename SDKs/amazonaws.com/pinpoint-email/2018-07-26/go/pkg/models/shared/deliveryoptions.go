package shared

type DeliveryOptions struct {
	SendingPoolName *string        `json:"SendingPoolName"`
	TLSPolicy       *TLSPolicyEnum `json:"TlsPolicy"`
}

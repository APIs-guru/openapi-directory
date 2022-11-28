package shared

type SecurityContextSecuritiesEnum string

const (
	SecurityContextSecuritiesEnumInsecure SecurityContextSecuritiesEnum = "INSECURE"
	SecurityContextSecuritiesEnumSsl      SecurityContextSecuritiesEnum = "SSL"
)

// SecurityContext
// Output only. A security context.
type SecurityContext struct {
	Securities []SecurityContextSecuritiesEnum `json:"securities,omitempty"`
}

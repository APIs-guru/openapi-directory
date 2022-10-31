package shared




type SecurityContextSecuritiesEnum string

const (
    SecurityContextSecuritiesEnumInsecure SecurityContextSecuritiesEnum = "INSECURE"
SecurityContextSecuritiesEnumSsl SecurityContextSecuritiesEnum = "SSL"
)


type SecurityContext struct {
    Securities []SecurityContextSecuritiesEnum `json:"securities,omitempty"`
    
}


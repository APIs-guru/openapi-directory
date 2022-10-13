package shared

type SessionContext struct {
	Attributes    *SessionContextAttributes `json:"attributes"`
	SessionIssuer *SessionIssuer            `json:"sessionIssuer"`
}

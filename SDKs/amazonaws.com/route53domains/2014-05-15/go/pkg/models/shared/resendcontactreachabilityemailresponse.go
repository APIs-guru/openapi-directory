package shared

type ResendContactReachabilityEmailResponse struct {
	DomainName        *string `json:"domainName,omitempty"`
	EmailAddress      *string `json:"emailAddress,omitempty"`
	IsAlreadyVerified *bool   `json:"isAlreadyVerified,omitempty"`
}

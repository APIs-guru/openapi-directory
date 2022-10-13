package shared

type ResendContactReachabilityEmailResponse struct {
	DomainName        *string `json:"domainName"`
	EmailAddress      *string `json:"emailAddress"`
	IsAlreadyVerified *bool   `json:"isAlreadyVerified"`
}

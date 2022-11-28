package shared

// MailFromAttributes
// A list of attributes that are associated with a MAIL FROM domain.
type MailFromAttributes struct {
	BehaviorOnMxFailure  BehaviorOnMxFailureEnum  `json:"BehaviorOnMxFailure"`
	MailFromDomain       string                   `json:"MailFromDomain"`
	MailFromDomainStatus MailFromDomainStatusEnum `json:"MailFromDomainStatus"`
}

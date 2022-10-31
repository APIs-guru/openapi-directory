package shared

type MailFromAttributes struct {
	BehaviorOnMxFailure  BehaviorOnMxFailureEnum  `json:"BehaviorOnMxFailure"`
	MailFromDomain       string                   `json:"MailFromDomain"`
	MailFromDomainStatus MailFromDomainStatusEnum `json:"MailFromDomainStatus"`
}

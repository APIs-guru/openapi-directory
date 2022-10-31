package shared

type LinkedForeignAccount struct {
	AccountID             *string `json:"accountId,omitempty"`
	EligibleForSearch     *bool   `json:"eligibleForSearch,omitempty"`
	ID                    *string `json:"id,omitempty"`
	InternalWebPropertyID *string `json:"internalWebPropertyId,omitempty"`
	Kind                  *string `json:"kind,omitempty"`
	LinkedAccountID       *string `json:"linkedAccountId,omitempty"`
	RemarketingAudienceID *string `json:"remarketingAudienceId,omitempty"`
	Status                *string `json:"status,omitempty"`
	Type                  *string `json:"type,omitempty"`
	WebPropertyID         *string `json:"webPropertyId,omitempty"`
}

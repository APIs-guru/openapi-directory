package shared

type LinkedForeignAccount struct {
	AccountID             *string `json:"accountId"`
	EligibleForSearch     *bool   `json:"eligibleForSearch"`
	ID                    *string `json:"id"`
	InternalWebPropertyID *string `json:"internalWebPropertyId"`
	Kind                  *string `json:"kind"`
	LinkedAccountID       *string `json:"linkedAccountId"`
	RemarketingAudienceID *string `json:"remarketingAudienceId"`
	Status                *string `json:"status"`
	Type                  *string `json:"type"`
	WebPropertyID         *string `json:"webPropertyId"`
}

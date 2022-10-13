package shared

import (
	"time"
)

type CreateAccountStatus struct {
	AccountID          *string                         `json:"AccountId"`
	AccountName        *string                         `json:"AccountName"`
	CompletedTimestamp *time.Time                      `json:"CompletedTimestamp"`
	FailureReason      *CreateAccountFailureReasonEnum `json:"FailureReason"`
	GovCloudAccountID  *string                         `json:"GovCloudAccountId"`
	ID                 *string                         `json:"Id"`
	RequestedTimestamp *time.Time                      `json:"RequestedTimestamp"`
	State              *CreateAccountStateEnum         `json:"State"`
}

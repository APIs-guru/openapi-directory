package shared

import (
	"time"
)

// CreateAccountStatus
// Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization.
type CreateAccountStatus struct {
	AccountID          *string                         `json:"AccountId,omitempty"`
	AccountName        *string                         `json:"AccountName,omitempty"`
	CompletedTimestamp *time.Time                      `json:"CompletedTimestamp,omitempty"`
	FailureReason      *CreateAccountFailureReasonEnum `json:"FailureReason,omitempty"`
	GovCloudAccountID  *string                         `json:"GovCloudAccountId,omitempty"`
	ID                 *string                         `json:"Id,omitempty"`
	RequestedTimestamp *time.Time                      `json:"RequestedTimestamp,omitempty"`
	State              *CreateAccountStateEnum         `json:"State,omitempty"`
}

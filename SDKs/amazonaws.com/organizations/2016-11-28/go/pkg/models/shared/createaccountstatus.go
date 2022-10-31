package shared

import (
"time")

type CreateAccountStatus struct {
    AccountID *string `json:"AccountId,omitempty"`
    AccountName *string `json:"AccountName,omitempty"`
    CompletedTimestamp *time.Time `json:"CompletedTimestamp,omitempty"`
    FailureReason *CreateAccountFailureReasonEnum `json:"FailureReason,omitempty"`
    GovCloudAccountID *string `json:"GovCloudAccountId,omitempty"`
    ID *string `json:"Id,omitempty"`
    RequestedTimestamp *time.Time `json:"RequestedTimestamp,omitempty"`
    State *CreateAccountStateEnum `json:"State,omitempty"`
    
}


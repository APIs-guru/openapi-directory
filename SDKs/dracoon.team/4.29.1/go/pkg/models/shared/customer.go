package shared

import (
	"time"
)

type CustomerCustomerContractTypeEnum string

const (
	CustomerCustomerContractTypeEnumDemo CustomerCustomerContractTypeEnum = "demo"
	CustomerCustomerContractTypeEnumFree CustomerCustomerContractTypeEnum = "free"
	CustomerCustomerContractTypeEnumPay  CustomerCustomerContractTypeEnum = "pay"
)

type Customer struct {
	ActivationCode       *string                          `json:"activationCode"`
	CompanyName          string                           `json:"companyName"`
	CreatedAt            time.Time                        `json:"createdAt"`
	CustomerAttributes   *CustomerAttributes              `json:"customerAttributes"`
	CustomerContractType CustomerCustomerContractTypeEnum `json:"customerContractType"`
	CustomerUUID         string                           `json:"customerUuid"`
	ID                   int64                            `json:"id"`
	IsLocked             *bool                            `json:"isLocked"`
	LastLoginAt          *time.Time                       `json:"lastLoginAt"`
	LockStatus           bool                             `json:"lockStatus"`
	ProviderCustomerID   *string                          `json:"providerCustomerId"`
	QuotaMax             int64                            `json:"quotaMax"`
	QuotaUsed            int64                            `json:"quotaUsed"`
	TrialDaysLeft        *int32                           `json:"trialDaysLeft"`
	UpdatedAt            *time.Time                       `json:"updatedAt"`
	UserMax              int32                            `json:"userMax"`
	UserUsed             int32                            `json:"userUsed"`
	WebhooksMax          *int64                           `json:"webhooksMax"`
}

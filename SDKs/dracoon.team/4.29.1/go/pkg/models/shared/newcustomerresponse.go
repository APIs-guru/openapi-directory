package shared

import (
	"time"
)

type NewCustomerResponseCustomerContractTypeEnum string

const (
	NewCustomerResponseCustomerContractTypeEnumDemo NewCustomerResponseCustomerContractTypeEnum = "demo"
	NewCustomerResponseCustomerContractTypeEnumFree NewCustomerResponseCustomerContractTypeEnum = "free"
	NewCustomerResponseCustomerContractTypeEnumPay  NewCustomerResponseCustomerContractTypeEnum = "pay"
)

type NewCustomerResponse struct {
	ActivationCode       *string                                     `json:"activationCode,omitempty"`
	CompanyName          string                                      `json:"companyName"`
	CreatedAt            *time.Time                                  `json:"createdAt,omitempty"`
	CustomerAttributes   *CustomerAttributes                         `json:"customerAttributes,omitempty"`
	CustomerContractType NewCustomerResponseCustomerContractTypeEnum `json:"customerContractType"`
	CustomerUUID         string                                      `json:"customerUuid"`
	FirstAdminUser       FirstAdminUser                              `json:"firstAdminUser"`
	ID                   *int64                                      `json:"id,omitempty"`
	IsLocked             *bool                                       `json:"isLocked,omitempty"`
	LockStatus           bool                                        `json:"lockStatus"`
	ProviderCustomerID   *string                                     `json:"providerCustomerId,omitempty"`
	QuotaMax             int64                                       `json:"quotaMax"`
	TrialDays            *int32                                      `json:"trialDays,omitempty"`
	UserMax              int32                                       `json:"userMax"`
	WebhooksMax          *int64                                      `json:"webhooksMax,omitempty"`
}

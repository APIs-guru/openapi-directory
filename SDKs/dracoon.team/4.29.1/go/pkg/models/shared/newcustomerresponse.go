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
	ActivationCode       *string                                     `json:"activationCode"`
	CompanyName          string                                      `json:"companyName"`
	CreatedAt            *time.Time                                  `json:"createdAt"`
	CustomerAttributes   *CustomerAttributes                         `json:"customerAttributes"`
	CustomerContractType NewCustomerResponseCustomerContractTypeEnum `json:"customerContractType"`
	CustomerUUID         string                                      `json:"customerUuid"`
	FirstAdminUser       FirstAdminUser                              `json:"firstAdminUser"`
	ID                   *int64                                      `json:"id"`
	IsLocked             *bool                                       `json:"isLocked"`
	LockStatus           bool                                        `json:"lockStatus"`
	ProviderCustomerID   *string                                     `json:"providerCustomerId"`
	QuotaMax             int64                                       `json:"quotaMax"`
	TrialDays            *int32                                      `json:"trialDays"`
	UserMax              int32                                       `json:"userMax"`
	WebhooksMax          *int64                                      `json:"webhooksMax"`
}

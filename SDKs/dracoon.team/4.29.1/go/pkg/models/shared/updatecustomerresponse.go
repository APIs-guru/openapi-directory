package shared

import (
	"time"
)

type UpdateCustomerResponseCustomerContractTypeEnum string

const (
	UpdateCustomerResponseCustomerContractTypeEnumDemo UpdateCustomerResponseCustomerContractTypeEnum = "demo"
	UpdateCustomerResponseCustomerContractTypeEnumFree UpdateCustomerResponseCustomerContractTypeEnum = "free"
	UpdateCustomerResponseCustomerContractTypeEnumPay  UpdateCustomerResponseCustomerContractTypeEnum = "pay"
)

type UpdateCustomerResponse struct {
	ActivationCode       *string                                        `json:"activationCode"`
	CompanyName          string                                         `json:"companyName"`
	CreatedAt            *time.Time                                     `json:"createdAt"`
	CustomerAttributes   *CustomerAttributes                            `json:"customerAttributes"`
	CustomerContractType UpdateCustomerResponseCustomerContractTypeEnum `json:"customerContractType"`
	CustomerUUID         string                                         `json:"customerUuid"`
	ID                   int64                                          `json:"id"`
	IsLocked             *bool                                          `json:"isLocked"`
	LockStatus           bool                                           `json:"lockStatus"`
	ProviderCustomerID   *string                                        `json:"providerCustomerId"`
	QuotaMax             int64                                          `json:"quotaMax"`
	TrialDays            *int32                                         `json:"trialDays"`
	UpdatedAt            *time.Time                                     `json:"updatedAt"`
	UserMax              int32                                          `json:"userMax"`
	WebhooksMax          *int64                                         `json:"webhooksMax"`
}

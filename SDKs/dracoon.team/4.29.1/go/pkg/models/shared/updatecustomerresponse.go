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
	ActivationCode       *string                                        `json:"activationCode,omitempty"`
	CompanyName          string                                         `json:"companyName"`
	CreatedAt            *time.Time                                     `json:"createdAt,omitempty"`
	CustomerAttributes   *CustomerAttributes                            `json:"customerAttributes,omitempty"`
	CustomerContractType UpdateCustomerResponseCustomerContractTypeEnum `json:"customerContractType"`
	CustomerUUID         string                                         `json:"customerUuid"`
	ID                   int64                                          `json:"id"`
	IsLocked             *bool                                          `json:"isLocked,omitempty"`
	LockStatus           bool                                           `json:"lockStatus"`
	ProviderCustomerID   *string                                        `json:"providerCustomerId,omitempty"`
	QuotaMax             int64                                          `json:"quotaMax"`
	TrialDays            *int32                                         `json:"trialDays,omitempty"`
	UpdatedAt            *time.Time                                     `json:"updatedAt,omitempty"`
	UserMax              int32                                          `json:"userMax"`
	WebhooksMax          *int64                                         `json:"webhooksMax,omitempty"`
}

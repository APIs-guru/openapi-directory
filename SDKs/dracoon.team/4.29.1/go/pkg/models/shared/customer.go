package shared

import (
"time")


type CustomerCustomerContractTypeEnum string

const (
    CustomerCustomerContractTypeEnumDemo CustomerCustomerContractTypeEnum = "demo"
CustomerCustomerContractTypeEnumFree CustomerCustomerContractTypeEnum = "free"
CustomerCustomerContractTypeEnumPay CustomerCustomerContractTypeEnum = "pay"
)


type Customer struct {
    ActivationCode *string `json:"activationCode,omitempty"`
    CompanyName string `json:"companyName"`
    CreatedAt time.Time `json:"createdAt"`
    CustomerAttributes *CustomerAttributes `json:"customerAttributes,omitempty"`
    CustomerContractType CustomerCustomerContractTypeEnum `json:"customerContractType"`
    CustomerUUID string `json:"customerUuid"`
    ID int64 `json:"id"`
    IsLocked *bool `json:"isLocked,omitempty"`
    LastLoginAt *time.Time `json:"lastLoginAt,omitempty"`
    LockStatus bool `json:"lockStatus"`
    ProviderCustomerID *string `json:"providerCustomerId,omitempty"`
    QuotaMax int64 `json:"quotaMax"`
    QuotaUsed int64 `json:"quotaUsed"`
    TrialDaysLeft *int32 `json:"trialDaysLeft,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    UserMax int32 `json:"userMax"`
    UserUsed int32 `json:"userUsed"`
    WebhooksMax *int64 `json:"webhooksMax,omitempty"`
    
}


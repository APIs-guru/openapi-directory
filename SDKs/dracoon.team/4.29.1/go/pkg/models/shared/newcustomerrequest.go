package shared

type NewCustomerRequestCustomerContractTypeEnum string

const (
	NewCustomerRequestCustomerContractTypeEnumDemo NewCustomerRequestCustomerContractTypeEnum = "demo"
	NewCustomerRequestCustomerContractTypeEnumFree NewCustomerRequestCustomerContractTypeEnum = "free"
	NewCustomerRequestCustomerContractTypeEnumPay  NewCustomerRequestCustomerContractTypeEnum = "pay"
)

type NewCustomerRequest struct {
	ActivationCode       *string                                    `json:"activationCode"`
	CompanyName          *string                                    `json:"companyName"`
	CustomerAttributes   *CustomerAttributes                        `json:"customerAttributes"`
	CustomerContractType NewCustomerRequestCustomerContractTypeEnum `json:"customerContractType"`
	FirstAdminUser       FirstAdminUser                             `json:"firstAdminUser"`
	IsLocked             *bool                                      `json:"isLocked"`
	LockStatus           *bool                                      `json:"lockStatus"`
	ProviderCustomerID   *string                                    `json:"providerCustomerId"`
	QuotaMax             int64                                      `json:"quotaMax"`
	TrialDays            *int32                                     `json:"trialDays"`
	UserMax              int32                                      `json:"userMax"`
	WebhooksMax          *int64                                     `json:"webhooksMax"`
}

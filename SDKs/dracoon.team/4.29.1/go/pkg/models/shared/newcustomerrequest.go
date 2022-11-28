package shared

type NewCustomerRequestCustomerContractTypeEnum string

const (
	NewCustomerRequestCustomerContractTypeEnumDemo NewCustomerRequestCustomerContractTypeEnum = "demo"
	NewCustomerRequestCustomerContractTypeEnumFree NewCustomerRequestCustomerContractTypeEnum = "free"
	NewCustomerRequestCustomerContractTypeEnumPay  NewCustomerRequestCustomerContractTypeEnum = "pay"
)

// NewCustomerRequest
// Request model for creating a customer
type NewCustomerRequest struct {
	ActivationCode       *string                                    `json:"activationCode,omitempty"`
	CompanyName          *string                                    `json:"companyName,omitempty"`
	CustomerAttributes   *CustomerAttributes                        `json:"customerAttributes,omitempty"`
	CustomerContractType NewCustomerRequestCustomerContractTypeEnum `json:"customerContractType"`
	FirstAdminUser       FirstAdminUser                             `json:"firstAdminUser"`
	IsLocked             *bool                                      `json:"isLocked,omitempty"`
	LockStatus           *bool                                      `json:"lockStatus,omitempty"`
	ProviderCustomerID   *string                                    `json:"providerCustomerId,omitempty"`
	QuotaMax             int64                                      `json:"quotaMax"`
	TrialDays            *int32                                     `json:"trialDays,omitempty"`
	UserMax              int32                                      `json:"userMax"`
	WebhooksMax          *int64                                     `json:"webhooksMax,omitempty"`
}

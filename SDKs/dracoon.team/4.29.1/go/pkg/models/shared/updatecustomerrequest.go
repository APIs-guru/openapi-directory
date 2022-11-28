package shared

type UpdateCustomerRequestCustomerContractTypeEnum string

const (
	UpdateCustomerRequestCustomerContractTypeEnumDemo UpdateCustomerRequestCustomerContractTypeEnum = "demo"
	UpdateCustomerRequestCustomerContractTypeEnumFree UpdateCustomerRequestCustomerContractTypeEnum = "free"
	UpdateCustomerRequestCustomerContractTypeEnumPay  UpdateCustomerRequestCustomerContractTypeEnum = "pay"
)

// UpdateCustomerRequest
// Request model for updating a customer
type UpdateCustomerRequest struct {
	CompanyName          *string                                       `json:"companyName,omitempty"`
	CustomerContractType UpdateCustomerRequestCustomerContractTypeEnum `json:"customerContractType"`
	IsLocked             *bool                                         `json:"isLocked,omitempty"`
	LockStatus           *bool                                         `json:"lockStatus,omitempty"`
	ProviderCustomerID   *string                                       `json:"providerCustomerId,omitempty"`
	QuotaMax             *int64                                        `json:"quotaMax,omitempty"`
	UserMax              *int32                                        `json:"userMax,omitempty"`
	WebhooksMax          *int64                                        `json:"webhooksMax,omitempty"`
}

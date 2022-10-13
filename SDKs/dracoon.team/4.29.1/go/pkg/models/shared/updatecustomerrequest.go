package shared

type UpdateCustomerRequestCustomerContractTypeEnum string

const (
	UpdateCustomerRequestCustomerContractTypeEnumDemo UpdateCustomerRequestCustomerContractTypeEnum = "demo"
	UpdateCustomerRequestCustomerContractTypeEnumFree UpdateCustomerRequestCustomerContractTypeEnum = "free"
	UpdateCustomerRequestCustomerContractTypeEnumPay  UpdateCustomerRequestCustomerContractTypeEnum = "pay"
)

type UpdateCustomerRequest struct {
	CompanyName          *string                                       `json:"companyName"`
	CustomerContractType UpdateCustomerRequestCustomerContractTypeEnum `json:"customerContractType"`
	IsLocked             *bool                                         `json:"isLocked"`
	LockStatus           *bool                                         `json:"lockStatus"`
	ProviderCustomerID   *string                                       `json:"providerCustomerId"`
	QuotaMax             *int64                                        `json:"quotaMax"`
	UserMax              *int32                                        `json:"userMax"`
	WebhooksMax          *int64                                        `json:"webhooksMax"`
}

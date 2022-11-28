package shared

// CreateCustomerRequestInput
// Request message to create a customer.
type CreateCustomerRequestInput struct {
	Customer *CompanyInput `json:"customer,omitempty"`
}

package shared

type TransferDomainToAnotherAwsAccountResponse struct {
	OperationID *string `json:"OperationId,omitempty"`
	Password    *string `json:"Password,omitempty"`
}

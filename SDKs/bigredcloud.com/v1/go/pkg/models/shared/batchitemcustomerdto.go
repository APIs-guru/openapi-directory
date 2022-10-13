package shared

type BatchItemCustomerDto struct {
	Item   *CustomerDto `json:"item"`
	OpCode *int32       `json:"opCode"`
}

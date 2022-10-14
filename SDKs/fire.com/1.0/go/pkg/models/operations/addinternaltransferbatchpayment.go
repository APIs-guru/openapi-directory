package operations

type AddInternalTransferBatchPaymentPathParams struct {
	BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
}

type AddInternalTransferBatchPaymentRequestBodyBatchItemInternalTransfer struct {
	Amount   *int64  `json:"amount,omitempty"`
	IcanFrom *int64  `json:"icanFrom,omitempty"`
	IcanTo   *int64  `json:"icanTo,omitempty"`
	Ref      *string `json:"ref,omitempty"`
}

type AddInternalTransferBatchPaymentRequest struct {
	PathParams AddInternalTransferBatchPaymentPathParams
	Request    AddInternalTransferBatchPaymentRequestBodyBatchItemInternalTransfer `request:"mediaType=application/json"`
}

type AddInternalTransferBatchPayment200ApplicationJSONNewBatchItemResponse struct {
	BatchItemUUID *string `json:"batchItemUuid,omitempty"`
}

type AddInternalTransferBatchPaymentResponse struct {
	ContentType          string
	NewBatchItemResponse *AddInternalTransferBatchPayment200ApplicationJSONNewBatchItemResponse
	StatusCode           int64
}

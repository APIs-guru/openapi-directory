package operations

type AddInternalTransferBatchPaymentPathParams struct {
	BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
}

type AddInternalTransferBatchPaymentRequestBodyBatchItemInternalTransfer struct {
	Amount   *int64  `json:"amount"`
	IcanFrom *int64  `json:"icanFrom"`
	IcanTo   *int64  `json:"icanTo"`
	Ref      *string `json:"ref"`
}

type AddInternalTransferBatchPaymentRequest struct {
	PathParams AddInternalTransferBatchPaymentPathParams
	Request    AddInternalTransferBatchPaymentRequestBodyBatchItemInternalTransfer `request:"mediaType=application/json"`
}

type AddInternalTransferBatchPayment200ApplicationJSONNewBatchItemResponse struct {
	BatchItemUUID *string `json:"batchItemUuid"`
}

type AddInternalTransferBatchPaymentResponse struct {
	ContentType          string
	NewBatchItemResponse *AddInternalTransferBatchPayment200ApplicationJSONNewBatchItemResponse
	StatusCode           int64
}

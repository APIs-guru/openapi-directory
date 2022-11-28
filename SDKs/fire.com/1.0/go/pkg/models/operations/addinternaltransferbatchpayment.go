package operations

type AddInternalTransferBatchPaymentPathParams struct {
	BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
}

type AddInternalTransferBatchPaymentBatchItemInternalTransfer struct {
	Amount   *int64  `json:"amount,omitempty"`
	IcanFrom *int64  `json:"icanFrom,omitempty"`
	IcanTo   *int64  `json:"icanTo,omitempty"`
	Ref      *string `json:"ref,omitempty"`
}

type AddInternalTransferBatchPaymentNewBatchItemResponse struct {
	BatchItemUUID *string `json:"batchItemUuid,omitempty"`
}

type AddInternalTransferBatchPaymentRequest struct {
	PathParams AddInternalTransferBatchPaymentPathParams
	Request    AddInternalTransferBatchPaymentBatchItemInternalTransfer `request:"mediaType=application/json"`
}

type AddInternalTransferBatchPaymentResponse struct {
	ContentType          string
	NewBatchItemResponse *AddInternalTransferBatchPaymentNewBatchItemResponse
	StatusCode           int64
}

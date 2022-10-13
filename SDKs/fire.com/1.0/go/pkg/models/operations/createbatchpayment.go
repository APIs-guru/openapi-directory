package operations

type CreateBatchPaymentRequestBodyTypeEnum string

const (
	CreateBatchPaymentRequestBodyTypeEnumBankTransfer     CreateBatchPaymentRequestBodyTypeEnum = "BANK_TRANSFER"
	CreateBatchPaymentRequestBodyTypeEnumInternalTransfer CreateBatchPaymentRequestBodyTypeEnum = "INTERNAL_TRANSFER"
)

type CreateBatchPaymentRequestBodyNewBatch struct {
	BatchName   *string                                `json:"batchName"`
	CallBackURL *string                                `json:"callBackUrl"`
	Currency    *string                                `json:"currency"`
	JobNumber   *string                                `json:"jobNumber"`
	Type        *CreateBatchPaymentRequestBodyTypeEnum `json:"type"`
}

type CreateBatchPaymentRequest struct {
	Request CreateBatchPaymentRequestBodyNewBatch `request:"mediaType=application/json"`
}

type CreateBatchPayment200ApplicationJSONNewBatchResponse struct {
	BatchUUID *string `json:"batchUuid"`
}

type CreateBatchPaymentResponse struct {
	ContentType      string
	NewBatchResponse *CreateBatchPayment200ApplicationJSONNewBatchResponse
	StatusCode       int64
}

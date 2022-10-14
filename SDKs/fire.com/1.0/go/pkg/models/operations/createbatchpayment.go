package operations

type CreateBatchPaymentRequestBodyTypeEnum string

const (
	CreateBatchPaymentRequestBodyTypeEnumBankTransfer     CreateBatchPaymentRequestBodyTypeEnum = "BANK_TRANSFER"
	CreateBatchPaymentRequestBodyTypeEnumInternalTransfer CreateBatchPaymentRequestBodyTypeEnum = "INTERNAL_TRANSFER"
)

type CreateBatchPaymentRequestBodyNewBatch struct {
	BatchName   *string                                `json:"batchName,omitempty"`
	CallBackURL *string                                `json:"callBackUrl,omitempty"`
	Currency    *string                                `json:"currency,omitempty"`
	JobNumber   *string                                `json:"jobNumber,omitempty"`
	Type        *CreateBatchPaymentRequestBodyTypeEnum `json:"type,omitempty"`
}

type CreateBatchPaymentRequest struct {
	Request CreateBatchPaymentRequestBodyNewBatch `request:"mediaType=application/json"`
}

type CreateBatchPayment200ApplicationJSONNewBatchResponse struct {
	BatchUUID *string `json:"batchUuid,omitempty"`
}

type CreateBatchPaymentResponse struct {
	ContentType      string
	NewBatchResponse *CreateBatchPayment200ApplicationJSONNewBatchResponse
	StatusCode       int64
}

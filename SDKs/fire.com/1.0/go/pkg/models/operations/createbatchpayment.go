package operations

type CreateBatchPaymentNewBatchTypeEnum string

const (
	CreateBatchPaymentNewBatchTypeEnumBankTransfer     CreateBatchPaymentNewBatchTypeEnum = "BANK_TRANSFER"
	CreateBatchPaymentNewBatchTypeEnumInternalTransfer CreateBatchPaymentNewBatchTypeEnum = "INTERNAL_TRANSFER"
)

type CreateBatchPaymentNewBatch struct {
	BatchName   *string                             `json:"batchName,omitempty"`
	CallBackURL *string                             `json:"callBackUrl,omitempty"`
	Currency    *string                             `json:"currency,omitempty"`
	JobNumber   *string                             `json:"jobNumber,omitempty"`
	Type        *CreateBatchPaymentNewBatchTypeEnum `json:"type,omitempty"`
}

type CreateBatchPaymentRequest struct {
	Request CreateBatchPaymentNewBatch `request:"mediaType=application/json"`
}

type CreateBatchPaymentNewBatchResponse struct {
	BatchUUID *string `json:"batchUuid,omitempty"`
}

type CreateBatchPaymentResponse struct {
	ContentType      string
	NewBatchResponse *CreateBatchPaymentNewBatchResponse
	StatusCode       int64
}

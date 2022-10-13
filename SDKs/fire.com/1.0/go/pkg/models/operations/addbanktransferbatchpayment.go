package operations

import (
	"openapi/pkg/models/shared"
)

type AddBankTransferBatchPaymentPathParams struct {
	BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
}

type AddBankTransferBatchPaymentRequestBody1PayeeTypeEnum string

const (
	AddBankTransferBatchPaymentRequestBody1PayeeTypeEnumAccountDetails AddBankTransferBatchPaymentRequestBody1PayeeTypeEnum = "ACCOUNT_DETAILS"
)

type AddBankTransferBatchPaymentRequestBody1BatchItemBankTransferMode2 struct {
	Amount                *int64                                                `json:"amount"`
	DestAccountHolderName *string                                               `json:"destAccountHolderName"`
	DestAccountNumber     *string                                               `json:"destAccountNumber"`
	DestIban              *string                                               `json:"destIban"`
	DestNsc               *string                                               `json:"destNsc"`
	IcanFrom              *int64                                                `json:"icanFrom"`
	MyRef                 *string                                               `json:"myRef"`
	PayeeType             *AddBankTransferBatchPaymentRequestBody1PayeeTypeEnum `json:"payeeType"`
	YourRef               *string                                               `json:"yourRef"`
}

type AddBankTransferBatchPaymentRequestBody2PayeeTypeEnum string

const (
	AddBankTransferBatchPaymentRequestBody2PayeeTypeEnumPayeeID AddBankTransferBatchPaymentRequestBody2PayeeTypeEnum = "PAYEE_ID"
)

type AddBankTransferBatchPaymentRequestBody2BatchItemBankTransferMode1 struct {
	Amount    *int64                                                `json:"amount"`
	IcanFrom  *int64                                                `json:"icanFrom"`
	MyRef     *string                                               `json:"myRef"`
	PayeeID   *int64                                                `json:"payeeId"`
	PayeeType *AddBankTransferBatchPaymentRequestBody2PayeeTypeEnum `json:"payeeType"`
	YourRef   *string                                               `json:"yourRef"`
}

type AddBankTransferBatchPaymentRequest struct {
	PathParams AddBankTransferBatchPaymentPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type AddBankTransferBatchPaymentResponse struct {
	ContentType                                                                                           string
	StatusCode                                                                                            int64
	Onebatches1Percent7BbatchUUIDPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema *shared.Onebatches1Percent7BbatchUUIDPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema
}

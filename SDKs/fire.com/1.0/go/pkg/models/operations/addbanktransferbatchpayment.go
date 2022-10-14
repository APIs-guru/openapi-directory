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
	Amount                *int64                                                `json:"amount,omitempty"`
	DestAccountHolderName *string                                               `json:"destAccountHolderName,omitempty"`
	DestAccountNumber     *string                                               `json:"destAccountNumber,omitempty"`
	DestIban              *string                                               `json:"destIban,omitempty"`
	DestNsc               *string                                               `json:"destNsc,omitempty"`
	IcanFrom              *int64                                                `json:"icanFrom,omitempty"`
	MyRef                 *string                                               `json:"myRef,omitempty"`
	PayeeType             *AddBankTransferBatchPaymentRequestBody1PayeeTypeEnum `json:"payeeType,omitempty"`
	YourRef               *string                                               `json:"yourRef,omitempty"`
}

type AddBankTransferBatchPaymentRequestBody2PayeeTypeEnum string

const (
	AddBankTransferBatchPaymentRequestBody2PayeeTypeEnumPayeeID AddBankTransferBatchPaymentRequestBody2PayeeTypeEnum = "PAYEE_ID"
)

type AddBankTransferBatchPaymentRequestBody2BatchItemBankTransferMode1 struct {
	Amount    *int64                                                `json:"amount,omitempty"`
	IcanFrom  *int64                                                `json:"icanFrom,omitempty"`
	MyRef     *string                                               `json:"myRef,omitempty"`
	PayeeID   *int64                                                `json:"payeeId,omitempty"`
	PayeeType *AddBankTransferBatchPaymentRequestBody2PayeeTypeEnum `json:"payeeType,omitempty"`
	YourRef   *string                                               `json:"yourRef,omitempty"`
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

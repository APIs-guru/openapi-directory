package operations

import (
	"openapi/pkg/models/shared"
)

type AddBankTransferBatchPaymentPathParams struct {
	BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
}

type AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum string

const (
	AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnumAccountDetails AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum = "ACCOUNT_DETAILS"
)

type AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 struct {
	Amount                *int64                                                                         `json:"amount,omitempty"`
	DestAccountHolderName *string                                                                        `json:"destAccountHolderName,omitempty"`
	DestAccountNumber     *string                                                                        `json:"destAccountNumber,omitempty"`
	DestIban              *string                                                                        `json:"destIban,omitempty"`
	DestNsc               *string                                                                        `json:"destNsc,omitempty"`
	IcanFrom              *int64                                                                         `json:"icanFrom,omitempty"`
	MyRef                 *string                                                                        `json:"myRef,omitempty"`
	PayeeType             *AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum `json:"payeeType,omitempty"`
	YourRef               *string                                                                        `json:"yourRef,omitempty"`
}

type AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum string

const (
	AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnumPayeeID AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum = "PAYEE_ID"
)

type AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 struct {
	Amount    *int64                                                                         `json:"amount,omitempty"`
	IcanFrom  *int64                                                                         `json:"icanFrom,omitempty"`
	MyRef     *string                                                                        `json:"myRef,omitempty"`
	PayeeID   *int64                                                                         `json:"payeeId,omitempty"`
	PayeeType *AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum `json:"payeeType,omitempty"`
	YourRef   *string                                                                        `json:"yourRef,omitempty"`
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

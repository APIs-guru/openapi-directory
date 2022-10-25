package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDirectDebitsForMandateUUIDQueryParams struct {
	MandateUUID string `queryParam:"style=form,explode=true,name=mandateUuid"`
}

type GetDirectDebitsForMandateUUIDRequest struct {
	QueryParams GetDirectDebitsForMandateUUIDQueryParams
}

type GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum string

const (
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumZero  GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "0"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumOne   GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "1"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumTwo   GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "2"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumThree GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "3"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumFour  GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "4"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumFive  GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "5"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumSix   GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "6"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumSeven GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "7"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumEight GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "8"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumNine  GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "9"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumA     GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "A"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnumB     GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = "B"
)

type GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum string

const (
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRecieved                 GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "RECIEVED"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRejectRequested          GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REJECT_REQUESTED"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRejectReadyForProcessing GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REJECT_READY_FOR_PROCESSING"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRejectRecordInProgress   GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REJECT_RECORD_IN_PROGRESS"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRejectRecorded           GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REJECT_RECORDED"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRejectFileCreated        GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REJECT_FILE_CREATED"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRejectFileSent           GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REJECT_FILE_SENT"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumCollected                GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "COLLECTED"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRefundRequested          GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REFUND_REQUESTED"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRefundRecordInProgress   GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REFUND_RECORD_IN_PROGRESS"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRefundRecorded           GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REFUND_RECORDED"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRefundFileCreated        GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REFUND_FILE_CREATED"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnumRefundFileSent           GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum = "REFUND_FILE_SENT"
)

type GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnum string

const (
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnumFirstCollection       GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnum = "FIRST_COLLECTION"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnumOngoingCollection     GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnum = "ONGOING_COLLECTION"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnumRepresentedCollection GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnum = "REPRESENTED_COLLECTION"
	GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnumFinalCollection       GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnum = "FINAL_COLLECTION"
)

type GetDirectDebitsForMandateUUIDDirectDebitsDirectDebit struct {
	Amount                 *int64                                                                                                   `json:"amount,omitempty"`
	Currency               *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency,omitempty"`
	DateCreated            *time.Time                                                                                               `json:"dateCreated,omitempty"`
	DirectDebitReference   *string                                                                                                  `json:"directDebitReference,omitempty"`
	DirectDebitUUID        *string                                                                                                  `json:"directDebitUuid,omitempty"`
	IsDdic                 *bool                                                                                                    `json:"isDDIC,omitempty"`
	LastUpdated            *time.Time                                                                                               `json:"lastUpdated,omitempty"`
	MandateUUID            *string                                                                                                  `json:"mandateUUid,omitempty"`
	OriginatorAlias        *string                                                                                                  `json:"originatorAlias,omitempty"`
	OriginatorName         *string                                                                                                  `json:"originatorName,omitempty"`
	OriginatorReference    *string                                                                                                  `json:"originatorReference,omitempty"`
	SchemeRejectReason     *string                                                                                                  `json:"schemeRejectReason,omitempty"`
	SchemeRejectReasonCode *GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitSchemeRejectReasonCodeEnum                          `json:"schemeRejectReasonCode,omitempty"`
	Status                 *GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitStatusEnum                                          `json:"status,omitempty"`
	TargetIcan             *int64                                                                                                   `json:"targetIcan,omitempty"`
	TargetPayeeID          *int64                                                                                                   `json:"targetPayeeId,omitempty"`
	Type                   *GetDirectDebitsForMandateUUIDDirectDebitsDirectDebitTypeEnum                                            `json:"type,omitempty"`
}

type GetDirectDebitsForMandateUUIDDirectDebits struct {
	Directdebits []GetDirectDebitsForMandateUUIDDirectDebitsDirectDebit `json:"directdebits,omitempty"`
	Total        *int64                                                 `json:"total,omitempty"`
}

type GetDirectDebitsForMandateUUIDResponse struct {
	ContentType  string
	DirectDebits *GetDirectDebitsForMandateUUIDDirectDebits
	StatusCode   int64
}

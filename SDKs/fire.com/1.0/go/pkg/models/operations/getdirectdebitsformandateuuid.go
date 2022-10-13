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

type GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum string

const (
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumZero  GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "0"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumOne   GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "1"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumTwo   GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "2"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumThree GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "3"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumFour  GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "4"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumFive  GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "5"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumSix   GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "6"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumSeven GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "7"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumEight GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "8"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumNine  GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "9"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumA     GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "A"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnumB     GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum = "B"
)

type GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum string

const (
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRecieved                 GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "RECIEVED"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRejectRequested          GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REJECT_REQUESTED"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRejectReadyForProcessing GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REJECT_READY_FOR_PROCESSING"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRejectRecordInProgress   GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REJECT_RECORD_IN_PROGRESS"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRejectRecorded           GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REJECT_RECORDED"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRejectFileCreated        GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REJECT_FILE_CREATED"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRejectFileSent           GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REJECT_FILE_SENT"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumCollected                GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "COLLECTED"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRefundRequested          GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REFUND_REQUESTED"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRefundRecordInProgress   GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REFUND_RECORD_IN_PROGRESS"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRefundRecorded           GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REFUND_RECORDED"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRefundFileCreated        GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REFUND_FILE_CREATED"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnumRefundFileSent           GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum = "REFUND_FILE_SENT"
)

type GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsTypeEnum string

const (
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsTypeEnumFirstCollection       GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsTypeEnum = "FIRST_COLLECTION"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsTypeEnumOngoingCollection     GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsTypeEnum = "ONGOING_COLLECTION"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsTypeEnumRepresentedCollection GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsTypeEnum = "REPRESENTED_COLLECTION"
	GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsTypeEnumFinalCollection       GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsTypeEnum = "FINAL_COLLECTION"
)

type GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsDirectDebit struct {
	Amount                 *int64                                                                                                   `json:"amount"`
	Currency               *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency"`
	DateCreated            *time.Time                                                                                               `json:"dateCreated"`
	DirectDebitReference   *string                                                                                                  `json:"directDebitReference"`
	DirectDebitUUID        *string                                                                                                  `json:"directDebitUuid"`
	IsDdic                 *bool                                                                                                    `json:"isDDIC"`
	LastUpdated            *time.Time                                                                                               `json:"lastUpdated"`
	MandateUUID            *string                                                                                                  `json:"mandateUUid"`
	OriginatorAlias        *string                                                                                                  `json:"originatorAlias"`
	OriginatorName         *string                                                                                                  `json:"originatorName"`
	OriginatorReference    *string                                                                                                  `json:"originatorReference"`
	SchemeRejectReason     *string                                                                                                  `json:"schemeRejectReason"`
	SchemeRejectReasonCode *GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsSchemeRejectReasonCodeEnum                   `json:"schemeRejectReasonCode"`
	Status                 *GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsStatusEnum                                   `json:"status"`
	TargetIcan             *int64                                                                                                   `json:"targetIcan"`
	TargetPayeeID          *int64                                                                                                   `json:"targetPayeeId"`
	Type                   *GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsTypeEnum                                     `json:"type"`
}

type GetDirectDebitsForMandateUUID200ApplicationJSONDirectDebits struct {
	Directdebits []GetDirectDebitsForMandateUUID200ApplicationJSONDirectdebitsDirectDebit `json:"directdebits"`
	Total        *int64                                                                   `json:"total"`
}

type GetDirectDebitsForMandateUUIDResponse struct {
	ContentType  string
	DirectDebits *GetDirectDebitsForMandateUUID200ApplicationJSONDirectDebits
	StatusCode   int64
}

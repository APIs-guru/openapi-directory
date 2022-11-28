package shared

import (
	"time"
)

type OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum string

const (
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumZero  OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "0"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumOne   OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "1"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumTwo   OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "2"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumThree OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "3"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumFour  OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "4"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumFive  OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "5"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumSix   OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "6"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumSeven OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "7"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumEight OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "8"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumNine  OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "9"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumA     OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "A"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnumB     OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = "B"
)

type OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum string

const (
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRecieved                 OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "RECIEVED"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRejectRequested          OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REJECT_REQUESTED"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRejectReadyForProcessing OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REJECT_READY_FOR_PROCESSING"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRejectRecordInProgress   OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REJECT_RECORD_IN_PROGRESS"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRejectRecorded           OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REJECT_RECORDED"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRejectFileCreated        OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REJECT_FILE_CREATED"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRejectFileSent           OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REJECT_FILE_SENT"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumCollected                OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "COLLECTED"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRefundRequested          OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REFUND_REQUESTED"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRefundRecordInProgress   OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REFUND_RECORD_IN_PROGRESS"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRefundRecorded           OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REFUND_RECORDED"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRefundFileCreated        OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REFUND_FILE_CREATED"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnumRefundFileSent           OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = "REFUND_FILE_SENT"
)

type OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum string

const (
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnumFirstCollection       OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum = "FIRST_COLLECTION"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnumOngoingCollection     OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum = "ONGOING_COLLECTION"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnumRepresentedCollection OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum = "REPRESENTED_COLLECTION"
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnumFinalCollection       OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum = "FINAL_COLLECTION"
)

type OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems struct {
	Amount                 *int64                                                                                                            `json:"amount,omitempty"`
	Currency               *OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency                 `json:"currency,omitempty"`
	DateCreated            *time.Time                                                                                                        `json:"dateCreated,omitempty"`
	DirectDebitReference   *string                                                                                                           `json:"directDebitReference,omitempty"`
	DirectDebitUUID        *string                                                                                                           `json:"directDebitUuid,omitempty"`
	IsDdic                 *bool                                                                                                             `json:"isDDIC,omitempty"`
	LastUpdated            *time.Time                                                                                                        `json:"lastUpdated,omitempty"`
	MandateUUID            *string                                                                                                           `json:"mandateUUid,omitempty"`
	OriginatorAlias        *string                                                                                                           `json:"originatorAlias,omitempty"`
	OriginatorName         *string                                                                                                           `json:"originatorName,omitempty"`
	OriginatorReference    *string                                                                                                           `json:"originatorReference,omitempty"`
	SchemeRejectReason     *string                                                                                                           `json:"schemeRejectReason,omitempty"`
	SchemeRejectReasonCode *OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum `json:"schemeRejectReasonCode,omitempty"`
	Status                 *OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum                 `json:"status,omitempty"`
	TargetIcan             *int64                                                                                                            `json:"targetIcan,omitempty"`
	TargetPayeeID          *int64                                                                                                            `json:"targetPayeeId,omitempty"`
	Type                   *OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum                   `json:"type,omitempty"`
}

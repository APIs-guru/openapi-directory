import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum {
    AccountDoesNotAcceptDirectDebits = "ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS",
    Ddic = "DDIC",
    AccountNotFound = "ACCOUNT_NOT_FOUND",
    AccountNotLive = "ACCOUNT_NOT_LIVE",
    CustomerNotFound = "CUSTOMER_NOT_FOUND",
    BusinessNotLive = "BUSINESS_NOT_LIVE",
    BusinessNotFull = "BUSINESS_NOT_FULL",
    PersonalUserNotLive = "PERSONAL_USER_NOT_LIVE",
    PersonalUserNotFull = "PERSONAL_USER_NOT_FULL",
    MandateAlreadyExists = "MANDATE_ALREADY_EXISTS",
    MandateWithDiferentAccount = "MANDATE_WITH_DIFERENT_ACCOUNT",
    NullMandateReference = "NULL_MANDATE_REFERENCE",
    InvalidAccountCurrency = "INVALID_ACCOUNT_CURRENCY",
    InvalidMandateReference = "INVALID_MANDATE_REFERENCE",
    RequestedByCustomerViaSupport = "REQUESTED_BY_CUSTOMER_VIA_SUPPORT",
    CustomerAccountClosed = "CUSTOMER_ACCOUNT_CLOSED",
    CustomerDeceased = "CUSTOMER_DECEASED",
    AccountTransferred = "ACCOUNT_TRANSFERRED",
    MandateNotFound = "MANDATE_NOT_FOUND",
    AccountTransferredToDifferentAccount = "ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT",
    InvalidAccountType = "INVALID_ACCOUNT_TYPE",
    MandateExpired = "MANDATE_EXPIRED",
    MandateCancelled = "MANDATE_CANCELLED",
    RequestedByCustomer = "REQUESTED_BY_CUSTOMER"
}
export declare enum GetDirectDebitMandatesMandatesMandateStatusEnum {
    Created = "CREATED",
    Live = "LIVE",
    RejectRequested = "REJECT_REQUESTED",
    RejectRecordInProgress = "REJECT_RECORD_IN_PROGRESS",
    RejectRecorded = "REJECT_RECORDED",
    RejectFileCreated = "REJECT_FILE_CREATED",
    RejectFileSent = "REJECT_FILE_SENT",
    CancelRequested = "CANCEL_REQUESTED",
    CancelRecordInProgress = "CANCEL_RECORD_IN_PROGRESS",
    CancelRecorded = "CANCEL_RECORDED",
    CancelFileCreated = "CANCEL_FILE_CREATED",
    CancelFileSent = "CANCEL_FILE_SENT",
    Complete = "COMPLETE",
    Dormant = "DORMANT"
}
export declare class GetDirectDebitMandatesMandatesMandate extends SpeakeasyBase {
    alias?: string;
    currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;
    dateCancelled?: Date;
    dateCompleted?: Date;
    dateCreated?: Date;
    fireRejectionReason?: GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum;
    lastUpdated?: Date;
    latestDirectDebitAmount?: number;
    latestDirectDebitDate?: Date;
    mandateReference?: string;
    mandateUuid?: string;
    numberOfDirectDebitCollected?: number;
    originatorAlias?: string;
    originatorLogoUrlLarge?: string;
    originatorLogoUrlSmall?: string;
    originatorName?: string;
    originatorReference?: string;
    schemeCancelReason?: string;
    schemeCancelReasonCode?: string;
    status?: GetDirectDebitMandatesMandatesMandateStatusEnum;
    targetIcan?: number;
    valueOfDirectDebitCollected?: number;
}
export declare class GetDirectDebitMandatesMandates extends SpeakeasyBase {
    mandates?: GetDirectDebitMandatesMandatesMandate[];
    total?: number;
}
export declare class GetDirectDebitMandatesResponse extends SpeakeasyBase {
    contentType: string;
    mandates?: GetDirectDebitMandatesMandates;
    statusCode: number;
}

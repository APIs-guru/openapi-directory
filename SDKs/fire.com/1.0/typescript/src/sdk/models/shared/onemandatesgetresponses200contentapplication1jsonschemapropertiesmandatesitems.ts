import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency } from "./oneaccountsgetresponses200contentapplication1jsonschemapropertiesaccountsitemspropertiescurrency";


export enum OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum {
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

export enum OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum {
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


export class OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @SpeakeasyMetadata({ data: "json, name=dateCancelled" })
  dateCancelled?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateCompleted" })
  dateCompleted?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=fireRejectionReason" })
  fireRejectionReason?: OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=latestDirectDebitAmount" })
  latestDirectDebitAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=latestDirectDebitDate" })
  latestDirectDebitDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=mandateReference" })
  mandateReference?: string;

  @SpeakeasyMetadata({ data: "json, name=mandateUuid" })
  mandateUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=numberOfDirectDebitCollected" })
  numberOfDirectDebitCollected?: number;

  @SpeakeasyMetadata({ data: "json, name=originatorAlias" })
  originatorAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=originatorLogoUrlLarge" })
  originatorLogoUrlLarge?: string;

  @SpeakeasyMetadata({ data: "json, name=originatorLogoUrlSmall" })
  originatorLogoUrlSmall?: string;

  @SpeakeasyMetadata({ data: "json, name=originatorName" })
  originatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=originatorReference" })
  originatorReference?: string;

  @SpeakeasyMetadata({ data: "json, name=schemeCancelReason" })
  schemeCancelReason?: string;

  @SpeakeasyMetadata({ data: "json, name=schemeCancelReasonCode" })
  schemeCancelReasonCode?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetIcan" })
  targetIcan?: number;

  @SpeakeasyMetadata({ data: "json, name=valueOfDirectDebitCollected" })
  valueOfDirectDebitCollected?: number;
}

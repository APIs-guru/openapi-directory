import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency } from "./1accountsgetresponses200contentapplication1jsonschemapropertiesaccountsitemspropertiescurrency";

export enum OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum {
    AccountDoesNotAcceptDirectDebits = "ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS"
,    Ddic = "DDIC"
,    AccountNotFound = "ACCOUNT_NOT_FOUND"
,    AccountNotLive = "ACCOUNT_NOT_LIVE"
,    CustomerNotFound = "CUSTOMER_NOT_FOUND"
,    BusinessNotLive = "BUSINESS_NOT_LIVE"
,    BusinessNotFull = "BUSINESS_NOT_FULL"
,    PersonalUserNotLive = "PERSONAL_USER_NOT_LIVE"
,    PersonalUserNotFull = "PERSONAL_USER_NOT_FULL"
,    MandateAlreadyExists = "MANDATE_ALREADY_EXISTS"
,    MandateWithDiferentAccount = "MANDATE_WITH_DIFERENT_ACCOUNT"
,    NullMandateReference = "NULL_MANDATE_REFERENCE"
,    InvalidAccountCurrency = "INVALID_ACCOUNT_CURRENCY"
,    InvalidMandateReference = "INVALID_MANDATE_REFERENCE"
,    RequestedByCustomerViaSupport = "REQUESTED_BY_CUSTOMER_VIA_SUPPORT"
,    CustomerAccountClosed = "CUSTOMER_ACCOUNT_CLOSED"
,    CustomerDeceased = "CUSTOMER_DECEASED"
,    AccountTransferred = "ACCOUNT_TRANSFERRED"
,    MandateNotFound = "MANDATE_NOT_FOUND"
,    AccountTransferredToDifferentAccount = "ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT"
,    InvalidAccountType = "INVALID_ACCOUNT_TYPE"
,    MandateExpired = "MANDATE_EXPIRED"
,    MandateCancelled = "MANDATE_CANCELLED"
,    RequestedByCustomer = "REQUESTED_BY_CUSTOMER"
}

export enum OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum {
    Created = "CREATED"
,    Live = "LIVE"
,    RejectRequested = "REJECT_REQUESTED"
,    RejectRecordInProgress = "REJECT_RECORD_IN_PROGRESS"
,    RejectRecorded = "REJECT_RECORDED"
,    RejectFileCreated = "REJECT_FILE_CREATED"
,    RejectFileSent = "REJECT_FILE_SENT"
,    CancelRequested = "CANCEL_REQUESTED"
,    CancelRecordInProgress = "CANCEL_RECORD_IN_PROGRESS"
,    CancelRecorded = "CANCEL_RECORDED"
,    CancelFileCreated = "CANCEL_FILE_CREATED"
,    CancelFileSent = "CANCEL_FILE_SENT"
,    Complete = "COMPLETE"
,    Dormant = "DORMANT"
}


export class OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @Metadata({ data: "json, name=dateCancelled" })
  dateCancelled?: Date;

  @Metadata({ data: "json, name=dateCompleted" })
  dateCompleted?: Date;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=fireRejectionReason" })
  fireRejectionReason?: OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=latestDirectDebitAmount" })
  latestDirectDebitAmount?: number;

  @Metadata({ data: "json, name=latestDirectDebitDate" })
  latestDirectDebitDate?: Date;

  @Metadata({ data: "json, name=mandateReference" })
  mandateReference?: string;

  @Metadata({ data: "json, name=mandateUuid" })
  mandateUuid?: string;

  @Metadata({ data: "json, name=numberOfDirectDebitCollected" })
  numberOfDirectDebitCollected?: number;

  @Metadata({ data: "json, name=originatorAlias" })
  originatorAlias?: string;

  @Metadata({ data: "json, name=originatorLogoUrlLarge" })
  originatorLogoUrlLarge?: string;

  @Metadata({ data: "json, name=originatorLogoUrlSmall" })
  originatorLogoUrlSmall?: string;

  @Metadata({ data: "json, name=originatorName" })
  originatorName?: string;

  @Metadata({ data: "json, name=originatorReference" })
  originatorReference?: string;

  @Metadata({ data: "json, name=schemeCancelReason" })
  schemeCancelReason?: string;

  @Metadata({ data: "json, name=schemeCancelReasonCode" })
  schemeCancelReasonCode?: string;

  @Metadata({ data: "json, name=status" })
  status?: OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum;

  @Metadata({ data: "json, name=targetIcan" })
  targetIcan?: number;

  @Metadata({ data: "json, name=valueOfDirectDebitCollected" })
  valueOfDirectDebitCollected?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency } from "./oneaccountsgetresponses200contentapplication1jsonschemapropertiesaccountsitemspropertiescurrency";



export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=cardId" })
  cardId?: number;

  @SpeakeasyMetadata({ data: "json, name=embossBusinessName" })
  embossBusinessName?: string;

  @SpeakeasyMetadata({ data: "json, name=embossCardName" })
  embossCardName?: string;

  @SpeakeasyMetadata({ data: "json, name=expiryDate" })
  expiryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=maskedPan" })
  maskedPan?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyAmount" })
  buyAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=buyCurrency" })
  buyCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedSide" })
  fixedSide?: string;

  @SpeakeasyMetadata({ data: "json, name=rate4d" })
  rate4d?: number;

  @SpeakeasyMetadata({ data: "json, name=sellAmount" })
  sellAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=sellCurrency" })
  sellCurrency?: string;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=nsc" })
  nsc?: string;
}

export enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum {
    FireAccount = "FIRE_ACCOUNT"
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=nsc" })
  nsc?: string;
}

export enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum {
    ExternalAccount = "EXTERNAL_ACCOUNT"
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=nsc" })
  nsc?: string;
}

export enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum {
    WithdrawalAccount = "WITHDRAWAL_ACCOUNT"
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acquirerIdDe32" })
  acquirerIdDe32?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalAmtDe54" })
  additionalAmtDe54?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalDataDe124" })
  additionalDataDe124?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalDataDe48" })
  additionalDataDe48?: string;

  @SpeakeasyMetadata({ data: "json, name=authCodeDe38" })
  authCodeDe38?: string;

  @SpeakeasyMetadata({ data: "json, name=authorisedByGps" })
  authorisedByGps?: string;

  @SpeakeasyMetadata({ data: "json, name=avsResult" })
  avsResult?: string;

  @SpeakeasyMetadata({ data: "json, name=billAmt" })
  billAmt?: number;

  @SpeakeasyMetadata({ data: "json, name=billCcy" })
  billCcy?: string;

  @SpeakeasyMetadata({ data: "json, name=expiryDate" })
  expiryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=mccCode" })
  mccCode?: string;

  @SpeakeasyMetadata({ data: "json, name=merchIdDe42" })
  merchIdDe42?: string;

  @SpeakeasyMetadata({ data: "json, name=merchNameDe43" })
  merchNameDe43?: string;

  @SpeakeasyMetadata({ data: "json, name=mtId" })
  mtId?: string;

  @SpeakeasyMetadata({ data: "json, name=posDataDe22" })
  posDataDe22?: string;

  @SpeakeasyMetadata({ data: "json, name=posDataDe61" })
  posDataDe61?: string;

  @SpeakeasyMetadata({ data: "json, name=posTermnlDe41" })
  posTermnlDe41?: string;

  @SpeakeasyMetadata({ data: "json, name=procCode" })
  procCode?: string;

  @SpeakeasyMetadata({ data: "json, name=recordDataDe120" })
  recordDataDe120?: string;

  @SpeakeasyMetadata({ data: "json, name=respCodeDe39" })
  respCodeDe39?: string;

  @SpeakeasyMetadata({ data: "json, name=retRefNoDe37" })
  retRefNoDe37?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=txnAmt4d" })
  txnAmt4d?: number;

  @SpeakeasyMetadata({ data: "json, name=txnCcy" })
  txnCcy?: string;

  @SpeakeasyMetadata({ data: "json, name=txnCtry" })
  txnCtry?: string;

  @SpeakeasyMetadata({ data: "json, name=txnDesc" })
  txnDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=txnStatCode" })
  txnStatCode?: string;

  @SpeakeasyMetadata({ data: "json, name=txnType" })
  txnType?: string;
}

export enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum {
    CardMerchant = "CARD_MERCHANT",
    CardAtm = "CARD_ATM"
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardMerchant" })
  cardMerchant?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountAfterCharges" })
  amountAfterCharges?: number;

  @SpeakeasyMetadata({ data: "json, name=amountBeforeCharges" })
  amountBeforeCharges?: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateAcknowledged" })
  dateAcknowledged?: Date;

  @SpeakeasyMetadata({ data: "json, name=feeAmount" })
  feeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=fxTradeDetails" })
  fxTradeDetails?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade;

  @SpeakeasyMetadata({ data: "json, name=ican" })
  ican?: number;

  @SpeakeasyMetadata({ data: "json, name=myRef" })
  myRef?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentRequestPublicCode" })
  paymentRequestPublicCode?: string;

  @SpeakeasyMetadata({ data: "json, name=refId" })
  refId?: number;

  @SpeakeasyMetadata({ data: "json, name=relatedParty" })
  relatedParty?: any;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency } from "./1accountsgetresponses200contentapplication1jsonschemapropertiesaccountsitemspropertiescurrency";


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=cardId" })
  cardId?: number;

  @Metadata({ data: "json, name=embossBusinessName" })
  embossBusinessName?: string;

  @Metadata({ data: "json, name=embossCardName" })
  embossCardName?: string;

  @Metadata({ data: "json, name=expiryDate" })
  expiryDate?: Date;

  @Metadata({ data: "json, name=maskedPan" })
  maskedPan?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: string;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyAmount" })
  buyAmount?: number;

  @Metadata({ data: "json, name=buyCurrency" })
  buyCurrency?: string;

  @Metadata({ data: "json, name=fixedSide" })
  fixedSide?: string;

  @Metadata({ data: "json, name=rate4d" })
  rate4d?: number;

  @Metadata({ data: "json, name=sellAmount" })
  sellAmount?: number;

  @Metadata({ data: "json, name=sellCurrency" })
  sellCurrency?: string;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=bic" })
  bic?: string;

  @Metadata({ data: "json, name=iban" })
  iban?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=nsc" })
  nsc?: string;
}

export enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum {
    FireAccount = "FIRE_ACCOUNT"
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount;

  @Metadata({ data: "json, name=type" })
  type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=bic" })
  bic?: string;

  @Metadata({ data: "json, name=iban" })
  iban?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=nsc" })
  nsc?: string;
}

export enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum {
    ExternalAccount = "EXTERNAL_ACCOUNT"
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount;

  @Metadata({ data: "json, name=type" })
  type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=bic" })
  bic?: string;

  @Metadata({ data: "json, name=iban" })
  iban?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=nsc" })
  nsc?: string;
}

export enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum {
    WithdrawalAccount = "WITHDRAWAL_ACCOUNT"
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount;

  @Metadata({ data: "json, name=type" })
  type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant extends SpeakeasyBase {
  @Metadata({ data: "json, name=acquirerIdDe32" })
  acquirerIdDe32?: string;

  @Metadata({ data: "json, name=additionalAmtDe54" })
  additionalAmtDe54?: string;

  @Metadata({ data: "json, name=additionalDataDe124" })
  additionalDataDe124?: string;

  @Metadata({ data: "json, name=additionalDataDe48" })
  additionalDataDe48?: string;

  @Metadata({ data: "json, name=authCodeDe38" })
  authCodeDe38?: string;

  @Metadata({ data: "json, name=authorisedByGps" })
  authorisedByGps?: string;

  @Metadata({ data: "json, name=avsResult" })
  avsResult?: string;

  @Metadata({ data: "json, name=billAmt" })
  billAmt?: number;

  @Metadata({ data: "json, name=billCcy" })
  billCcy?: string;

  @Metadata({ data: "json, name=expiryDate" })
  expiryDate?: string;

  @Metadata({ data: "json, name=mccCode" })
  mccCode?: string;

  @Metadata({ data: "json, name=merchIdDe42" })
  merchIdDe42?: string;

  @Metadata({ data: "json, name=merchNameDe43" })
  merchNameDe43?: string;

  @Metadata({ data: "json, name=mtId" })
  mtId?: string;

  @Metadata({ data: "json, name=posDataDe22" })
  posDataDe22?: string;

  @Metadata({ data: "json, name=posDataDe61" })
  posDataDe61?: string;

  @Metadata({ data: "json, name=posTermnlDe41" })
  posTermnlDe41?: string;

  @Metadata({ data: "json, name=procCode" })
  procCode?: string;

  @Metadata({ data: "json, name=recordDataDe120" })
  recordDataDe120?: string;

  @Metadata({ data: "json, name=respCodeDe39" })
  respCodeDe39?: string;

  @Metadata({ data: "json, name=retRefNoDe37" })
  retRefNoDe37?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=txnAmt4d" })
  txnAmt4d?: number;

  @Metadata({ data: "json, name=txnCcy" })
  txnCcy?: string;

  @Metadata({ data: "json, name=txnCtry" })
  txnCtry?: string;

  @Metadata({ data: "json, name=txnDesc" })
  txnDesc?: string;

  @Metadata({ data: "json, name=txnStatCode" })
  txnStatCode?: string;

  @Metadata({ data: "json, name=txnType" })
  txnType?: string;
}

export enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum {
    CardMerchant = "CARD_MERCHANT"
,    CardAtm = "CARD_ATM"
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardMerchant" })
  cardMerchant?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant;

  @Metadata({ data: "json, name=type" })
  type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum;
}


export class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountAfterCharges" })
  amountAfterCharges?: number;

  @Metadata({ data: "json, name=amountBeforeCharges" })
  amountBeforeCharges?: number;

  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=card" })
  card?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard;

  @Metadata({ data: "json, name=currency" })
  currency?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=dateAcknowledged" })
  dateAcknowledged?: Date;

  @Metadata({ data: "json, name=feeAmount" })
  feeAmount?: number;

  @Metadata({ data: "json, name=fxTradeDetails" })
  fxTradeDetails?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade;

  @Metadata({ data: "json, name=ican" })
  ican?: number;

  @Metadata({ data: "json, name=myRef" })
  myRef?: string;

  @Metadata({ data: "json, name=paymentRequestPublicCode" })
  paymentRequestPublicCode?: string;

  @Metadata({ data: "json, name=refId" })
  refId?: number;

  @Metadata({ data: "json, name=relatedParty" })
  relatedParty?: any;

  @Metadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=txnId" })
  txnId?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

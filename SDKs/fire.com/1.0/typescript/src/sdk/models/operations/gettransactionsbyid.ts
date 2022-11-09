import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ican" })
  ican: number;
}


export class GetTransactionsByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionsByIdPathParams;
}


export class GetTransactionsByIdTransactionRelatedCard extends SpeakeasyBase {
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


export class GetTransactionsByIdTransactionFxTrade extends SpeakeasyBase {
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


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount extends SpeakeasyBase {
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

export enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum {
    FireAccount = "FIRE_ACCOUNT"
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount;

  @Metadata({ data: "json, name=type" })
  type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum;
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount extends SpeakeasyBase {
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

export enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum {
    ExternalAccount = "EXTERNAL_ACCOUNT"
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount;

  @Metadata({ data: "json, name=type" })
  type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum;
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount extends SpeakeasyBase {
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

export enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum {
    WithdrawalAccount = "WITHDRAWAL_ACCOUNT"
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount;

  @Metadata({ data: "json, name=type" })
  type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum;
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant extends SpeakeasyBase {
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

export enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum {
    CardMerchant = "CARD_MERCHANT"
,    CardAtm = "CARD_ATM"
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardMerchant" })
  cardMerchant?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant;

  @Metadata({ data: "json, name=type" })
  type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum;
}


export class GetTransactionsByIdTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountAfterCharges" })
  amountAfterCharges?: number;

  @Metadata({ data: "json, name=amountBeforeCharges" })
  amountBeforeCharges?: number;

  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=card" })
  card?: GetTransactionsByIdTransactionRelatedCard;

  @Metadata({ data: "json, name=currency" })
  currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=dateAcknowledged" })
  dateAcknowledged?: Date;

  @Metadata({ data: "json, name=feeAmount" })
  feeAmount?: number;

  @Metadata({ data: "json, name=fxTradeDetails" })
  fxTradeDetails?: GetTransactionsByIdTransactionFxTrade;

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


export class GetTransactionsByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  transaction?: GetTransactionsByIdTransaction;
}

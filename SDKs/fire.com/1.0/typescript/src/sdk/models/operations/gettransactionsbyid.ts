import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ican" })
  ican: number;
}


export class GetTransactionsByIdTransactionRelatedCard extends SpeakeasyBase {
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


export class GetTransactionsByIdTransactionFxTrade extends SpeakeasyBase {
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


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount extends SpeakeasyBase {
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

export enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum {
    FireAccount = "FIRE_ACCOUNT"
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum;
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount extends SpeakeasyBase {
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

export enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum {
    ExternalAccount = "EXTERNAL_ACCOUNT"
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum;
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount extends SpeakeasyBase {
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

export enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum {
    WithdrawalAccount = "WITHDRAWAL_ACCOUNT"
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum;
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant extends SpeakeasyBase {
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

export enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum {
    CardMerchant = "CARD_MERCHANT",
    CardAtm = "CARD_ATM"
}


export class GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardMerchant" })
  cardMerchant?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum;
}


export class GetTransactionsByIdTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountAfterCharges" })
  amountAfterCharges?: number;

  @SpeakeasyMetadata({ data: "json, name=amountBeforeCharges" })
  amountBeforeCharges?: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: GetTransactionsByIdTransactionRelatedCard;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateAcknowledged" })
  dateAcknowledged?: Date;

  @SpeakeasyMetadata({ data: "json, name=feeAmount" })
  feeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=fxTradeDetails" })
  fxTradeDetails?: GetTransactionsByIdTransactionFxTrade;

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


export class GetTransactionsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionsByIdPathParams;
}


export class GetTransactionsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transaction?: GetTransactionsByIdTransaction;
}

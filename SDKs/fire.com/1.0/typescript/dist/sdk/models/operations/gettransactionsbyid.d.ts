import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsByIdPathParams extends SpeakeasyBase {
    ican: number;
}
export declare class GetTransactionsByIdTransactionRelatedCard extends SpeakeasyBase {
    alias?: string;
    cardId?: number;
    embossBusinessName?: string;
    embossCardName?: string;
    expiryDate?: Date;
    maskedPan?: string;
    provider?: string;
}
export declare class GetTransactionsByIdTransactionFxTrade extends SpeakeasyBase {
    buyAmount?: number;
    buyCurrency?: string;
    fixedSide?: string;
    rate4d?: number;
    sellAmount?: number;
    sellCurrency?: string;
}
export declare class GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount extends SpeakeasyBase {
    accountNumber?: string;
    alias?: string;
    bic?: string;
    iban?: string;
    id?: number;
    nsc?: string;
}
export declare enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum {
    FireAccount = "FIRE_ACCOUNT"
}
export declare class GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccount extends SpeakeasyBase {
    account?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountAccount;
    type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyFireAccountTypeEnum;
}
export declare class GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount extends SpeakeasyBase {
    accountNumber?: string;
    alias?: string;
    bic?: string;
    iban?: string;
    id?: number;
    nsc?: string;
}
export declare enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum {
    ExternalAccount = "EXTERNAL_ACCOUNT"
}
export declare class GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccount extends SpeakeasyBase {
    account?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountAccount;
    type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum;
}
export declare class GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount extends SpeakeasyBase {
    accountNumber?: string;
    alias?: string;
    bic?: string;
    iban?: string;
    id?: number;
    nsc?: string;
}
export declare enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum {
    WithdrawalAccount = "WITHDRAWAL_ACCOUNT"
}
export declare class GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayee extends SpeakeasyBase {
    account?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeAccount;
    type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyPayeeTypeEnum;
}
export declare class GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant extends SpeakeasyBase {
    acquirerIdDe32?: string;
    additionalAmtDe54?: string;
    additionalDataDe124?: string;
    additionalDataDe48?: string;
    authCodeDe38?: string;
    authorisedByGps?: string;
    avsResult?: string;
    billAmt?: number;
    billCcy?: string;
    expiryDate?: string;
    mccCode?: string;
    merchIdDe42?: string;
    merchNameDe43?: string;
    mtId?: string;
    posDataDe22?: string;
    posDataDe61?: string;
    posTermnlDe41?: string;
    procCode?: string;
    recordDataDe120?: string;
    respCodeDe39?: string;
    retRefNoDe37?: string;
    statusCode?: string;
    token?: string;
    txnAmt4d?: number;
    txnCcy?: string;
    txnCtry?: string;
    txnDesc?: string;
    txnStatCode?: string;
    txnType?: string;
}
export declare enum GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum {
    CardMerchant = "CARD_MERCHANT",
    CardAtm = "CARD_ATM"
}
export declare class GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPayment extends SpeakeasyBase {
    cardMerchant?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant;
    type?: GetTransactionsByIdTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum;
}
export declare class GetTransactionsByIdTransaction extends SpeakeasyBase {
    amountAfterCharges?: number;
    amountBeforeCharges?: number;
    balance?: number;
    card?: GetTransactionsByIdTransactionRelatedCard;
    currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;
    date?: Date;
    dateAcknowledged?: Date;
    feeAmount?: number;
    fxTradeDetails?: GetTransactionsByIdTransactionFxTrade;
    ican?: number;
    myRef?: string;
    paymentRequestPublicCode?: string;
    refId?: number;
    relatedParty?: any;
    taxAmount?: number;
    txnId?: number;
    type?: string;
}
export declare class GetTransactionsByIdRequest extends SpeakeasyBase {
    pathParams: GetTransactionsByIdPathParams;
}
export declare class GetTransactionsByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transaction?: GetTransactionsByIdTransaction;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency } from "./oneaccountsgetresponses200contentapplication1jsonschemapropertiesaccountsitemspropertiescurrency";
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard extends SpeakeasyBase {
    alias?: string;
    cardId?: number;
    embossBusinessName?: string;
    embossCardName?: string;
    expiryDate?: Date;
    maskedPan?: string;
    provider?: string;
}
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade extends SpeakeasyBase {
    buyAmount?: number;
    buyCurrency?: string;
    fixedSide?: string;
    rate4d?: number;
    sellAmount?: number;
    sellCurrency?: string;
}
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount extends SpeakeasyBase {
    accountNumber?: string;
    alias?: string;
    bic?: string;
    iban?: string;
    id?: number;
    nsc?: string;
}
export declare enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum {
    FireAccount = "FIRE_ACCOUNT"
}
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount extends SpeakeasyBase {
    account?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount;
    type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum;
}
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount extends SpeakeasyBase {
    accountNumber?: string;
    alias?: string;
    bic?: string;
    iban?: string;
    id?: number;
    nsc?: string;
}
export declare enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum {
    ExternalAccount = "EXTERNAL_ACCOUNT"
}
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount extends SpeakeasyBase {
    account?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount;
    type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum;
}
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount extends SpeakeasyBase {
    accountNumber?: string;
    alias?: string;
    bic?: string;
    iban?: string;
    id?: number;
    nsc?: string;
}
export declare enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum {
    WithdrawalAccount = "WITHDRAWAL_ACCOUNT"
}
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee extends SpeakeasyBase {
    account?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount;
    type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum;
}
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant extends SpeakeasyBase {
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
export declare enum Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum {
    CardMerchant = "CARD_MERCHANT",
    CardAtm = "CARD_ATM"
}
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment extends SpeakeasyBase {
    cardMerchant?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant;
    type?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum;
}
export declare class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    amountAfterCharges?: number;
    amountBeforeCharges?: number;
    balance?: number;
    card?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard;
    currency?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;
    date?: Date;
    dateAcknowledged?: Date;
    feeAmount?: number;
    fxTradeDetails?: Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade;
    ican?: number;
    myRef?: string;
    paymentRequestPublicCode?: string;
    refId?: number;
    relatedParty?: any;
    taxAmount?: number;
    txnId?: number;
    type?: string;
}

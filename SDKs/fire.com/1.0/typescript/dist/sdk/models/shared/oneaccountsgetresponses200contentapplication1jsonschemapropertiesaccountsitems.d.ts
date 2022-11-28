import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
export declare class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency extends SpeakeasyBase {
    code?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum;
    description?: string;
}
export declare enum OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum {
    Live = "LIVE",
    Migrated = "MIGRATED"
}
export declare class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems extends SpeakeasyBase {
    balance?: number;
    cbic?: string;
    ccan?: string;
    ciban?: string;
    cnsc?: string;
    colour?: string;
    currency?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency;
    defaultAccount?: boolean;
    directDebitsAllowed?: boolean;
    ican?: number;
    name?: string;
    status?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum;
}

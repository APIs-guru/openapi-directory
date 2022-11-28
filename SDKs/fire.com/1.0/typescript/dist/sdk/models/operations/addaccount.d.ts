import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddAccountNewAccountCurrencyEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
export declare class AddAccountNewAccount extends SpeakeasyBase {
    acceptFeesAndCharges?: boolean;
    accountName?: string;
    currency?: AddAccountNewAccountCurrencyEnum;
}
export declare class AddAccountRequest extends SpeakeasyBase {
    request: AddAccountNewAccount;
}
export declare class AddAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
}

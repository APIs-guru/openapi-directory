import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddAccountNewAccountCurrencyEnum {
    Eur = "EUR"
,    Gbp = "GBP"
}


export class AddAccountNewAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptFeesAndCharges" })
  acceptFeesAndCharges?: boolean;

  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: AddAccountNewAccountCurrencyEnum;
}


export class AddAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: AddAccountNewAccount;
}


export class AddAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
}

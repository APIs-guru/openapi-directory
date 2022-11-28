import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddAccountNewAccountCurrencyEnum {
    Eur = "EUR",
    Gbp = "GBP"
}


export class AddAccountNewAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptFeesAndCharges" })
  acceptFeesAndCharges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: AddAccountNewAccountCurrencyEnum;
}


export class AddAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddAccountNewAccount;
}


export class AddAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}


export class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrencyCodeEnum {
    Eur = "EUR"
,    Gbp = "GBP"
}


export class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrencyCodeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;
}

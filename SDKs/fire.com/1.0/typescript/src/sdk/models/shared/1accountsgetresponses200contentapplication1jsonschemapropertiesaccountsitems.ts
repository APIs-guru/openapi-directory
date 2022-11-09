import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum {
    Eur = "EUR"
,    Gbp = "GBP"
}


export class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;
}

export enum OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum {
    Live = "LIVE"
,    Migrated = "MIGRATED"
}


export class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=cbic" })
  cbic?: string;

  @Metadata({ data: "json, name=ccan" })
  ccan?: string;

  @Metadata({ data: "json, name=ciban" })
  ciban?: string;

  @Metadata({ data: "json, name=cnsc" })
  cnsc?: string;

  @Metadata({ data: "json, name=colour" })
  colour?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency;

  @Metadata({ data: "json, name=defaultAccount" })
  defaultAccount?: boolean;

  @Metadata({ data: "json, name=directDebitsAllowed" })
  directDebitsAllowed?: boolean;

  @Metadata({ data: "json, name=ican" })
  ican?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum;
}

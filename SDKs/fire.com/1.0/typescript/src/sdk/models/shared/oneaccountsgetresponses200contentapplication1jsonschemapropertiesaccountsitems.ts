import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}


export class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}

export enum OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum {
    Live = "LIVE",
    Migrated = "MIGRATED"
}


export class OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=cbic" })
  cbic?: string;

  @SpeakeasyMetadata({ data: "json, name=ccan" })
  ccan?: string;

  @SpeakeasyMetadata({ data: "json, name=ciban" })
  ciban?: string;

  @SpeakeasyMetadata({ data: "json, name=cnsc" })
  cnsc?: string;

  @SpeakeasyMetadata({ data: "json, name=colour" })
  colour?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency;

  @SpeakeasyMetadata({ data: "json, name=defaultAccount" })
  defaultAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=directDebitsAllowed" })
  directDebitsAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ican" })
  ican?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum;
}

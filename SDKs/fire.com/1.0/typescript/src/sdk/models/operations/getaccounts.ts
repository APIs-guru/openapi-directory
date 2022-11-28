import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAccountsAccountsAccountCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}


export class GetAccountsAccountsAccountCurrency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: GetAccountsAccountsAccountCurrencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}

export enum GetAccountsAccountsAccountStatusEnum {
    Live = "LIVE",
    Migrated = "MIGRATED"
}


export class GetAccountsAccountsAccount extends SpeakeasyBase {
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
  currency?: GetAccountsAccountsAccountCurrency;

  @SpeakeasyMetadata({ data: "json, name=defaultAccount" })
  defaultAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=directDebitsAllowed" })
  directDebitsAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ican" })
  ican?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetAccountsAccountsAccountStatusEnum;
}


export class GetAccountsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: GetAccountsAccountsAccount })
  accounts?: GetAccountsAccountsAccount[];
}


export class GetAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accounts?: GetAccountsAccounts;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

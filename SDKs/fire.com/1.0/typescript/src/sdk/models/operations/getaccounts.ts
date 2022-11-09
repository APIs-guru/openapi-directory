import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAccountsAccountsAccountCurrencyCodeEnum {
    Eur = "EUR"
,    Gbp = "GBP"
}


export class GetAccountsAccountsAccountCurrency extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: GetAccountsAccountsAccountCurrencyCodeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;
}

export enum GetAccountsAccountsAccountStatusEnum {
    Live = "LIVE"
,    Migrated = "MIGRATED"
}


export class GetAccountsAccountsAccount extends SpeakeasyBase {
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
  currency?: GetAccountsAccountsAccountCurrency;

  @Metadata({ data: "json, name=defaultAccount" })
  defaultAccount?: boolean;

  @Metadata({ data: "json, name=directDebitsAllowed" })
  directDebitsAllowed?: boolean;

  @Metadata({ data: "json, name=ican" })
  ican?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: GetAccountsAccountsAccountStatusEnum;
}


export class GetAccountsAccounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: operations.GetAccountsAccountsAccount })
  accounts?: GetAccountsAccountsAccount[];
}


export class GetAccountsResponse extends SpeakeasyBase {
  @Metadata()
  accounts?: GetAccountsAccounts;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

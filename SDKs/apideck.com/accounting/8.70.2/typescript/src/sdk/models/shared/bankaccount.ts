import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyEnum } from "./currencyenum";

export enum BankAccountAccountTypeEnum {
    BankAccount = "bank_account"
,    CreditCard = "credit_card"
,    Other = "other"
}


export class BankAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_name" })
  accountName?: string;

  @Metadata({ data: "json, name=account_number" })
  accountNumber?: string;

  @Metadata({ data: "json, name=account_type" })
  accountType?: BankAccountAccountTypeEnum;

  @Metadata({ data: "json, name=bank_code" })
  bankCode?: string;

  @Metadata({ data: "json, name=bic" })
  bic?: string;

  @Metadata({ data: "json, name=branch_identifier" })
  branchIdentifier?: string;

  @Metadata({ data: "json, name=bsb_number" })
  bsbNumber?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=iban" })
  iban?: string;
}

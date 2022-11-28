import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";


export enum BankAccountAccountTypeEnum {
    BankAccount = "bank_account",
    CreditCard = "credit_card",
    Other = "other"
}


export class BankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_name" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=account_type" })
  accountType?: BankAccountAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=bank_code" })
  bankCode?: string;

  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=branch_identifier" })
  branchIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=bsb_number" })
  bsbNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;
}

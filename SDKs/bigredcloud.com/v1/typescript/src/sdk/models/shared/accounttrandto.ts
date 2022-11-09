import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountTranDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookTranId" })
  bookTranId?: number;

  @Metadata({ data: "json, name=bookTranTypeId" })
  bookTranTypeId?: number;

  @Metadata({ data: "json, name=bookTransactionReference" })
  bookTransactionReference?: string;

  @Metadata({ data: "json, name=bookTypeDesc" })
  bookTypeDesc?: string;

  @Metadata({ data: "json, name=credit" })
  credit?: number;

  @Metadata({ data: "json, name=debit" })
  debit?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=procDate" })
  procDate?: Date;
}

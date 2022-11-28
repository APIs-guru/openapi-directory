import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountTranDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookTranId" })
  bookTranId?: number;

  @SpeakeasyMetadata({ data: "json, name=bookTranTypeId" })
  bookTranTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=bookTransactionReference" })
  bookTransactionReference?: string;

  @SpeakeasyMetadata({ data: "json, name=bookTypeDesc" })
  bookTypeDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=credit" })
  credit?: number;

  @SpeakeasyMetadata({ data: "json, name=debit" })
  debit?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=procDate" })
  procDate?: Date;
}

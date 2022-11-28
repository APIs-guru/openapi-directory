import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcEntryDto } from "./acentrydto";
import { AcudfValueDto } from "./acudfvaluedto";



export class PaymentDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acCode" })
  acCode?: string;

  @SpeakeasyMetadata({ data: "json, name=acEntries", elemType: AcEntryDto })
  acEntries?: AcEntryDto[];

  @SpeakeasyMetadata({ data: "json, name=bankAccountCode" })
  bankAccountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=bankAccountId" })
  bankAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=bookTranTypeId" })
  bookTranTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=customFields", elemType: AcudfValueDto })
  customFields?: AcudfValueDto[];

  @SpeakeasyMetadata({ data: "json, name=detailCollection" })
  detailCollection?: string[];

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: number;

  @SpeakeasyMetadata({ data: "json, name=entryDate" })
  entryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=plaidTransactionId" })
  plaidTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=procDate" })
  procDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=supplierId" })
  supplierId?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=transferBankCode" })
  transferBankCode?: string;

  @SpeakeasyMetadata({ data: "json, name=transferBankId" })
  transferBankId?: number;

  @SpeakeasyMetadata({ data: "json, name=unallocated" })
  unallocated?: number;
}

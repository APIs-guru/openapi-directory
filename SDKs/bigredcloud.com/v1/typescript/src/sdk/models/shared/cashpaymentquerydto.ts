import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AcEntryDto } from "./acentrydto";
import { AcudfValueDto } from "./acudfvaluedto";


export class CashPaymentQueryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=acCode" })
  acCode?: string;

  @Metadata({ data: "json, name=acEntries", elemType: shared.AcEntryDto })
  acEntries?: AcEntryDto[];

  @Metadata({ data: "json, name=bankAccountCode" })
  bankAccountCode?: string;

  @Metadata({ data: "json, name=bankAccountId" })
  bankAccountId?: number;

  @Metadata({ data: "json, name=bookTranTypeId" })
  bookTranTypeId?: number;

  @Metadata({ data: "json, name=customFields", elemType: shared.AcudfValueDto })
  customFields?: AcudfValueDto[];

  @Metadata({ data: "json, name=detailCollection" })
  detailCollection?: string[];

  @Metadata({ data: "json, name=discount" })
  discount?: number;

  @Metadata({ data: "json, name=entryDate" })
  entryDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=ledger" })
  ledger?: number;

  @Metadata({ data: "json, name=lodgement" })
  lodgement?: number;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=plaidTransactionId" })
  plaidTransactionId?: string;

  @Metadata({ data: "json, name=procDate" })
  procDate?: Date;

  @Metadata({ data: "json, name=supplierId" })
  supplierId?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=unallocated" })
  unallocated?: number;
}

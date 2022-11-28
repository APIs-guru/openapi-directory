import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcEntryDto } from "./acentrydto";
import { AcudfValueDto } from "./acudfvaluedto";
import { VatEntryDto } from "./vatentrydto";



export class PurchaseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acCode" })
  acCode?: string;

  @SpeakeasyMetadata({ data: "json, name=acEntries", elemType: AcEntryDto })
  acEntries?: AcEntryDto[];

  @SpeakeasyMetadata({ data: "json, name=bookTranTypeId" })
  bookTranTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=customFields", elemType: AcudfValueDto })
  customFields?: AcudfValueDto[];

  @SpeakeasyMetadata({ data: "json, name=detailCollection" })
  detailCollection?: string[];

  @SpeakeasyMetadata({ data: "json, name=entryDate" })
  entryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=netGoods" })
  netGoods?: number;

  @SpeakeasyMetadata({ data: "json, name=netServices" })
  netServices?: number;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=postponedAccounting" })
  postponedAccounting?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=totalNet" })
  totalNet?: number;

  @SpeakeasyMetadata({ data: "json, name=totalVAT" })
  totalVat?: number;

  @SpeakeasyMetadata({ data: "json, name=unallocated" })
  unallocated?: number;

  @SpeakeasyMetadata({ data: "json, name=unpaid" })
  unpaid?: number;

  @SpeakeasyMetadata({ data: "json, name=vatEntries", elemType: VatEntryDto })
  vatEntries?: VatEntryDto[];

  @SpeakeasyMetadata({ data: "json, name=vatTypeId" })
  vatTypeId?: number;
}

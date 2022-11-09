import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AcEntryDto } from "./acentrydto";


export class ProductTranDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=acEntries", elemType: shared.AcEntryDto })
  acEntries?: AcEntryDto[];

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=amountNet" })
  amountNet: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: number;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=tranNotes" })
  tranNotes?: string[];

  @Metadata({ data: "json, name=unitPrice" })
  unitPrice?: number;

  @Metadata({ data: "json, name=vat" })
  vat?: number;

  @Metadata({ data: "json, name=vatAnalysisTypeId" })
  vatAnalysisTypeId?: number;

  @Metadata({ data: "json, name=vatRateId" })
  vatRateId?: number;
}

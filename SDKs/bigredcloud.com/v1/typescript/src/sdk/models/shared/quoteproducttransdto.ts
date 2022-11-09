import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QuoteAcEntriesDto } from "./quoteacentriesdto";


export class QuoteProductTransDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=acEntries", elemType: shared.QuoteAcEntriesDto })
  acEntries?: QuoteAcEntriesDto[];

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=companyId" })
  companyId?: number;

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

  @Metadata({ data: "json, name=vatAmount" })
  vatAmount?: number;

  @Metadata({ data: "json, name=vatAnalysisTypeId" })
  vatAnalysisTypeId?: number;

  @Metadata({ data: "json, name=vatRateId" })
  vatRateId?: number;
}

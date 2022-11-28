import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuoteAcEntriesDto } from "./quoteacentriesdto";



export class QuoteProductTransDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acEntries", elemType: QuoteAcEntriesDto })
  acEntries?: QuoteAcEntriesDto[];

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=tranNotes" })
  tranNotes?: string[];

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=vatAmount" })
  vatAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=vatAnalysisTypeId" })
  vatAnalysisTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=vatRateId" })
  vatRateId?: number;
}

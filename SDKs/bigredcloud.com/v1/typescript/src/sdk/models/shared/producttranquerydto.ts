import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcEntryDto } from "./acentrydto";



export class ProductTranQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acEntries", elemType: AcEntryDto })
  acEntries?: AcEntryDto[];

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountNet" })
  amountNet?: number;

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

  @SpeakeasyMetadata({ data: "json, name=vat" })
  vat?: number;

  @SpeakeasyMetadata({ data: "json, name=vatAnalysisTypeId" })
  vatAnalysisTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=vatRateId" })
  vatRateId?: number;
}

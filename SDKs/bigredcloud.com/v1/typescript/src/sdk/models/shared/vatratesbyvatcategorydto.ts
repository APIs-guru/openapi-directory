import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VatRateDto } from "./vatratedto";



export class VatRatesByVatCategoryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vatCategoryId" })
  vatCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=vatRates", elemType: VatRateDto })
  vatRates?: VatRateDto[];
}

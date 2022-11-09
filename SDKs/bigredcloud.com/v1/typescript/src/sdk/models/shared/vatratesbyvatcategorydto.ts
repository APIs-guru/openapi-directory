import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VatRateDto } from "./vatratedto";


export class VatRatesByVatCategoryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=vatCategoryId" })
  vatCategoryId?: number;

  @Metadata({ data: "json, name=vatRates", elemType: shared.VatRateDto })
  vatRates?: VatRateDto[];
}

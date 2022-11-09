import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VatCategoriesProcessVatRatesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.VatRatesByVatCategoryDto })
  request: shared.VatRatesByVatCategoryDto[];
}


export class VatCategoriesProcessVatRatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vatCategoriesProcessVatRates200ApplicationJsonObject?: Map<string, any>;
}

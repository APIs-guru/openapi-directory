import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VatCategoriesProcessVatRatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.VatRatesByVatCategoryDto })
  request: shared.VatRatesByVatCategoryDto[];
}


export class VatCategoriesProcessVatRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vatCategoriesProcessVatRates200ApplicationJsonObject?: Map<string, any>;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VatCategoriesProcessVatRatesRequest extends SpeakeasyBase {
    request: shared.VatRatesByVatCategoryDto[];
}
export declare class VatCategoriesProcessVatRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vatCategoriesProcessVatRates200ApplicationJsonObject?: Map<string, any>;
}

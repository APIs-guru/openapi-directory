import { SpeakeasyBase } from "../../../internal/utils";
import { VatRateDto } from "./vatratedto";
export declare class VatRatesByVatCategoryDto extends SpeakeasyBase {
    vatCategoryId?: number;
    vatRates?: VatRateDto[];
}

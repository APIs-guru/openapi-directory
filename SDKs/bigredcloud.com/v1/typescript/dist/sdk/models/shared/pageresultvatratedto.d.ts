import { SpeakeasyBase } from "../../../internal/utils";
import { VatRateDto } from "./vatratedto";
export declare class PageResultVatRateDto extends SpeakeasyBase {
    count?: number;
    items?: VatRateDto[];
    nextPageLink?: string;
}

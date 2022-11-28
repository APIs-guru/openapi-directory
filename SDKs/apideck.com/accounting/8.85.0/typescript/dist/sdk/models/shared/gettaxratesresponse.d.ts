import { SpeakeasyBase } from "../../../internal/utils";
import { TaxRate } from "./taxrate";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetTaxRatesResponse extends SpeakeasyBase {
    data: TaxRate[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

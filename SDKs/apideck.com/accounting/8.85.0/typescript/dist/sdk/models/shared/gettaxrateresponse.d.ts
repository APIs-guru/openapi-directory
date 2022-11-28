import { SpeakeasyBase } from "../../../internal/utils";
import { TaxRate } from "./taxrate";
export declare class GetTaxRateResponse extends SpeakeasyBase {
    data: TaxRate;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { PosPayment } from "./pospayment";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetPosPaymentsResponse extends SpeakeasyBase {
    data: PosPayment[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

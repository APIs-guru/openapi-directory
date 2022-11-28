import { SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetPaymentsResponse extends SpeakeasyBase {
    data: Payment[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

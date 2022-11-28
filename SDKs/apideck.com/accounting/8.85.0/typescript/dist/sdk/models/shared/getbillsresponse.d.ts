import { SpeakeasyBase } from "../../../internal/utils";
import { Bill } from "./bill";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetBillsResponse extends SpeakeasyBase {
    data: Bill[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

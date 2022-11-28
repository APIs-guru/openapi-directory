import { SpeakeasyBase } from "../../../internal/utils";
import { Merchant } from "./merchant";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetMerchantsResponse extends SpeakeasyBase {
    data: Merchant[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Lead } from "./lead";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetLeadsResponse extends SpeakeasyBase {
    data: Lead[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

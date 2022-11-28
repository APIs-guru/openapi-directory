import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOffRequest } from "./timeoffrequest";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetTimeOffRequestsResponse extends SpeakeasyBase {
    data: TimeOffRequest[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

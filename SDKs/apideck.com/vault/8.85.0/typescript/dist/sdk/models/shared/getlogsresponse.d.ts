import { SpeakeasyBase } from "../../../internal/utils";
import { Log } from "./log";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetLogsResponse extends SpeakeasyBase {
    data: Log[];
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}

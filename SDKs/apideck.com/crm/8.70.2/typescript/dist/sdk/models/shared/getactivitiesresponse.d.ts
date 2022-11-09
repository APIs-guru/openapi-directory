import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Activity } from "./activity";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetActivitiesResponse extends SpeakeasyBase {
    data: Activity[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

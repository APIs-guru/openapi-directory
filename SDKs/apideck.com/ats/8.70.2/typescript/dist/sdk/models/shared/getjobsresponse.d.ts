import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetJobsResponse extends SpeakeasyBase {
    data: Job[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

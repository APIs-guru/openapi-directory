import { SpeakeasyBase } from "../../../internal/utils";
import { HrisJobs } from "./hrisjobs";
export declare class GetHrisJobsResponse extends SpeakeasyBase {
    data: HrisJobs;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

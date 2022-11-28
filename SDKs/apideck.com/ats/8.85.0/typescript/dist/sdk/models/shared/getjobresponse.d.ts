import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
export declare class GetJobResponse extends SpeakeasyBase {
    data: Job;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

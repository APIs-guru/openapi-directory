import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
export declare class DescribeJobsResponse extends SpeakeasyBase {
    items?: Job[];
    nextToken?: string;
}

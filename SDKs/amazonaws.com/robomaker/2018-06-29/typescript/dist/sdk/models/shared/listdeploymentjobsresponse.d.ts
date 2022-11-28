import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentJob } from "./deploymentjob";
export declare class ListDeploymentJobsResponse extends SpeakeasyBase {
    deploymentJobs?: DeploymentJob[];
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentJob } from "./deploymentjob";
export declare class ListDeploymentJobsResponse extends SpeakeasyBase {
    deploymentJobs?: DeploymentJob[];
    nextToken?: string;
}

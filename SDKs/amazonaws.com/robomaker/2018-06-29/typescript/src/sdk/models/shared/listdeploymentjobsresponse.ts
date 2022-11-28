import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentJob } from "./deploymentjob";



export class ListDeploymentJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentJobs", elemType: DeploymentJob })
  deploymentJobs?: DeploymentJob[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

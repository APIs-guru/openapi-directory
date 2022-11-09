import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentJob } from "./deploymentjob";


export class ListDeploymentJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentJobs", elemType: shared.DeploymentJob })
  deploymentJobs?: DeploymentJob[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

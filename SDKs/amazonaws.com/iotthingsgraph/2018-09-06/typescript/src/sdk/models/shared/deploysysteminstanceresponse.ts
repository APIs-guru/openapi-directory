import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemInstanceSummary } from "./systeminstancesummary";


export class DeploySystemInstanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=greengrassDeploymentId" })
  greengrassDeploymentId?: string;

  @Metadata({ data: "json, name=summary" })
  summary: SystemInstanceSummary;
}

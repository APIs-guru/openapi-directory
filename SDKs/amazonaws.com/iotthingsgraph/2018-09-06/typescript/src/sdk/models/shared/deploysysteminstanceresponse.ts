import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemInstanceSummary } from "./systeminstancesummary";



export class DeploySystemInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=greengrassDeploymentId" })
  greengrassDeploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary: SystemInstanceSummary;
}

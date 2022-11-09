import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDeploymentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=DeploymentIds" })
  deploymentIds?: string[];

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
